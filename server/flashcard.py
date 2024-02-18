import serial
import time

# Open serial connection to Arduino
ser = serial.Serial('/dev/tty.usbmodem101', 9600)
time.sleep(2)  # Wait for the connection to establish

# List of bullet points
bullet_points = [
    "First point",
    "Second point is longer than 16 characters",
    "Third",
    "Fourth point here"
]

# Send each bullet point, followed by a newline character
for point in bullet_points:
    ser.write((point + "\n").encode('utf-8'))
    time.sleep(0.5)  # Short delay between sends

ser.close()  # Close the serial connection
