// compile
// arduino-cli compile --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server/server.ino"
// upload
// arduino-cli upload -p /dev/tty.usbmodem101 --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server"
// python3 "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server/flashcard.py"

#include <LiquidCrystal.h>

// LCD pin setup
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// Button setup
const int buttonPin = 8; // Button connected to digital pin 8

// Variables for storing and displaying text
String bulletPoints[10]; // Array to store bullet points
int currentPoint = 0; // Index of the current bullet point
int totalPoints = 0; // Total number of bullet points
int displayIndex = 0; // Index to track the display progress of the current bullet point
int displayStartIndex = 0;

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
  pinMode(buttonPin, INPUT_PULLUP); // Enable internal pull-up resistor
  lcd.print("Ready...");
}

void loop() {
  static bool lastButtonState = HIGH; // Assume button starts unpressed
  bool currentButtonState = digitalRead(buttonPin);

  // Check for button press (transition from HIGH to LOW)
  if (lastButtonState == HIGH && currentButtonState == LOW) {
    delay(20); // Simple debounce
    // Verify button press after delay
    if (digitalRead(buttonPin) == LOW) {
      // Advance to display the next part of the current or next bullet point
      displayCurrentPoint();
    }
  }
  lastButtonState = currentButtonState; // Update last button state

  // Handle serial input
  while (Serial.available() > 0) {
    String point = Serial.readStringUntil('\n');
    if (totalPoints < 10) { // Ensure there's space in the array
      bulletPoints[totalPoints++] = point; // Add new point to the array
      if (totalPoints == 1) { // If it's the first point, display it immediately
        displayCurrentPoint();
      }
    }
  }
}

void displayCurrentPoint() {
  if (currentPoint >= totalPoints) {
    return; // No more bullet points to display
  }
  
  lcd.clear(); // Clear the LCD for the new text segment
  
  String currentText = bulletPoints[currentPoint].substring(displayStartIndex); // Get remaining text of the current bullet point
  String line1 = "", line2 = "";
  int charCount = 0; // Count of characters to be displayed

  // Determine what goes on the first line
  for (int i = 0; i < currentText.length() && charCount < 16; i++, charCount++) {
    line1 += currentText[i];
    if (currentText[i] == ' ' && charCount >= 16 - 5) { // Check if near the end of the line and next word might not fit
      break; // Ensure words aren't split at the end of the line
    }
  }

  // Determine what goes on the second line, if there's more text
  if (charCount < currentText.length()) {
    for (int i = charCount; i < currentText.length() && i < charCount + 16; i++) {
      line2 += currentText[i];
      if (currentText[i] == ' ' && i >= charCount + 16 - 5) { // Check if near the end of the second line and next word might not fit
        break; // Ensure words aren't split at the end of the line
      }
    }
  }

  // Update displayStartIndex for the next display, considering both lines
  displayStartIndex += charCount + (line2.length() > 0 ? line2.length() : 0);
  if (displayStartIndex >= bulletPoints[currentPoint].length()) { // If we've displayed the entire bullet point
    currentPoint++; // Move to the next bullet point
    displayStartIndex = 0; // Reset start index for the new bullet point
  }

  // Display the determined lines on the LCD
  lcd.print(line1);
  if (line2.length() > 0) {
    lcd.setCursor(0, 1); // Move cursor to the second line
    lcd.print(line2);
  }
}