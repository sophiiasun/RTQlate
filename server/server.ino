#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Splitting messages to fit 16x2
  // line one
  lcd.print("sample text");
  // Set the cursor to the beginning of the line two
  lcd.setCursor(0, 1);
  // Continue the message on the second line
  lcd.print("for flashcards!");
}

void loop() {
  // n/a
}
