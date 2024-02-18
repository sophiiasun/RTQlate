#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Splitting the message "meow meow meow meow!" to fit the 16x2 LCD
  // Display the first part of the message on the first line
  lcd.print("rosanne loves");
  // Set the cursor to the beginning of the second line
  lcd.setCursor(0, 1);
  // Continue the message on the second line
  lcd.print("furries meow!");
}

void loop() {
  // Not used in this modification, so it's left empty
}
