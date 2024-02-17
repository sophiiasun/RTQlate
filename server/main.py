from flask import Flask, jsonify, request
# import cv2
# import face_recognition
# import firebase_admin
# from firebase_admin import credentials, firestore

app = Flask(__name__)

@app.route("/")
def test():
  return "hello"
