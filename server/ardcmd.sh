arduino-cli compile --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server/server.ino"
arduino-cli upload -p /dev/tty.usbmodem101 --fqbn arduino:avr:uno "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server"
python3 "/Users/kellyqu/Documents/GitHub/Ellehacks-2024- /server/flashcard.py"
