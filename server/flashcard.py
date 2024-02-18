import serial
import time
import json
import sys

if __name__ == "__main__":
  if len(sys.argv) > 1:
    bullet_points = json.loads(sys.argv[1])
    # Open serial connection to Arduino
    ser = serial.Serial('/dev/tty.usbmodem101', 9600)
    time.sleep(2)  # Wait for the connection to establish

    # Send each bullet point, followed by a newline character
    for point in bullet_points:
      ser.write((point + "\n").encode('utf-8'))
      time.sleep(0.5)  # Short delay between sends

    ser.close()  # Close the serial connection
