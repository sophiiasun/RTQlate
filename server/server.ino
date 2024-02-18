// compile
// arduino-cli compile --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server/server.ino"
// upload
// arduino-cli upload -p /dev/tty.usbmodem101 --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server"

#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  // Set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
}

void loop() {
  if (Serial.available() > 0) {
    // Clear the LCD before displaying new text
    lcd.clear();
    // Read the incoming string
    String incomingString = Serial.readStringUntil('\n');
    
    // Display the first part of the incoming string on the first line
    lcd.setCursor(0, 0); // Set cursor to the first line
    if(incomingString.length() <= 16) {
      lcd.print(incomingString);
    } else {
      lcd.print(incomingString.substring(0, 16));
      // If the string is longer than 16 characters, continue on the second line
      lcd.setCursor(0, 1); // Set cursor to the second line
      lcd.print(incomingString.substring(16));
    }
  }
}
