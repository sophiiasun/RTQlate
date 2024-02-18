<div align="center">
    <img src="https://github.com/sophiiasun/RTQlit/assets/110139243/dfabcfd6-9375-463f-a50d-a34d8c9a8675" width="50px" style="pointer-events: none;"/>
    <div id="user-content-toc">
      <ul>
          <summary><h1 style="display: inline-block; margin-bottom:0px; font-size:60pt;">RTQlate</h1></summary>
      </ul>
    </div>
    <h3>Articulate with RTQlate</h3>
<!--     <h4><i>description</i></h4> -->
   <br>
    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
    <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"/>
    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C%2B%2B&logoColor=white"/>
    <img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"/>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <br><br>
</div>

![image](https://github.com/sophiiasun/RTQlit/assets/110139243/91e34e7b-bcb8-4bfe-ad0e-bb94593f2e8d)

description

## Features
RTQlate is a 5-feature speaking assistant and feedback provider:
- Auto-summarized flash cards in the convenient form of a physical wearable.
- Real-time eye-tracking
- Sentiment analysis
- Enunciation, pronunciation, and clarity indicator
- Confidence level measurer

## Built with
- Firebase for account authentication
- AssemblyAI to transcribe speech and check pauses between words and other stuff
- OpenAI API for text summarization
- Python Flask server
- Arduino LCD flashcards via C++
- Vanilla React frontend styled with Tailwind CSS
  

## Architecture Overview


## Getting Started

### Prerequisites
1. Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/) installed for the backend.

2. Install required dependencies in root folder and both frontend and backend folders
```
npm install
```

3. Create a `.env` file in this folder with the following variables:
```
OPENAI_API_KEY={YOUR_API_KEY}
```

### Starting the server

_(127.0.0.1:5000 by default)_

1. `cd server`
2. `python3 -m venv venv`
3. `source venv/bin/activate` (MacOS)
4. `venv\Scripts\activate` (Windows Powershell)
5. `pip install -r requirements.txt`
6. `FLASK_APP=main.py flask run` (MaxOS)
7. `$env:FLASK_APP = "main.py"` (Windows Powershell)
8. `flask run` (Windows Powershell)

### Starting the app

_(localhost:3000 by default)_

1. `cd app`
2. `npm install`
3. `npm start`



### Sneak Peak
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/a35c7558-0b19-4fc6-bc95-1db3769914c5" width="300px" style="pointer-events: none;"/>
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/3318a4db-c5eb-4738-8b3e-9185c7ef8d53" width="300px" style="pointer-events: none;"/>
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/6b7412c4-fe95-468b-a4fe-29cdad57066a" width="300px" style="pointer-events: none;"/>
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/6f7e23d0-1ec1-4fac-8b23-b88a66bf53fa" width="300px" style="pointer-events: none;"/>
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/50b8b41a-0119-4fd4-9b6e-c7265a9493e2" width="300px" style="pointer-events: none;"/>
<img src="https://github.com/sophiiasun/RTQlit/assets/110139243/4f4cb04f-77f9-42ad-af64-762224c83b8a" width="300px" style="pointer-events: none;"/>



## Next Steps
- [X] Eyes chart
- [ ] Deployment
- [X] Demo Video
