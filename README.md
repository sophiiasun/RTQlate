<div align="center">
    <div id="user-content-toc">
      <ul>
          <summary><h1 style="display: inline-block; margin-bottom:0px; font-size:60pt;">RTQlate</h1></summary>
      </ul>
    </div>
    <h3>Articulate with RTQlate</h3>
    <h4><i>description</i></h4>
   <br>
    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C%2B%2B&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <br><br>
</div>


description

## Features
- login w/ firebase for accounts
- assemblyai to transcribe speech and check pauses between words and other stuff
- openai takes that output and writes feedback (displayed on screen)
- LCD flashcards from summarized script

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
6. `python3 app.py`

### Starting the app

_(localhost:3000 by default)_

1. `cd app`
2. `npm install`
3. `npm start`



### Sneak Peak


## Next Steps
- [X] Eyes chart
- [ ] Deployment
- [X] Demo Video



pages: 
- landing
- setup to upload script
- main -> transcribed text
