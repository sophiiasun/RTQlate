from flask import Flask

import requests
import json
import time

app = Flask(__name__)

base_url = "https://api.assemblyai.com/v2"
headers = {
    "authorization": "9ab4969c17204b40bbb473f22b075eea" 
}

@app.route("/")
def hello():
  return "hello"

@app.route('/submit',methods = ['POST'])
def submit():
    with open("../recordings/YorkUniversity2.mp3" , "rb") as f:
        response = requests.post(base_url + "/upload", headers=headers, data=f)
    upload_url = response.json()["upload_url"]
    data = {
        "audio_url": upload_url,
        "auto_highlights": True
    }
    url = base_url + "/transcript"
    response = requests.post(url, json=data, headers=headers)

    transcription_id = response.json()['id']
    polling_endpoint = f"https://api.assemblyai.com/v2/transcript/{transcription_id}"

    while True:
        transcription_result = requests.get(polling_endpoint, headers=headers).json()
        if transcription_result['status'] == 'completed':
            auto_highlights_result = transcription_result['auto_highlights_result']
            for highlight in auto_highlights_result['results']:
                print(f"Highlight: {highlight['text']}, Count: {highlight['count']}, Rank: {highlight['rank']}, Timestamps: {highlight['timestamps']}")
            break
        elif transcription_result['status'] == 'error':
            raise RuntimeError(f"Transcription failed: {transcription_result['error']}")
        else:
            time.sleep(3)
        with open('data.json', 'w') as f:
            json.dump(transcription_result, f)

submit()