import serial
import time

# Replace '/dev/ttyUSB0' with your Arduino's serial port
ser = serial.Serial('/dev/tty.usbmodem101', 9600)
time.sleep(2)  # wait for the serial connection to initialize

strings_to_send = ["sample text for flashcards!"]

for string in strings_to_send:
    ser.write(string.encode('utf-8'))
    time.sleep(1)  # wait a bit between sending each string

ser.close()
