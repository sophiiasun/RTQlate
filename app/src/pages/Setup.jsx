import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

const Setup = () => {
    const [text, setText] = useState("");

    async function handleSubmit() {
        if (text) {
            await axios.post(`http://127.0.0.1:5000/summarize`, { text });
        }
        window.location.href = "/recorder";
    }

    function handleSkip() {
        window.location.href = "/recorder";
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="pt-28 mx-10 h-screen">
            <h1>Enter your script below (optional):</h1>
            <textarea id="script" name="script" onChange={handleChange}/><br></br>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
            <input type="submit" value="Skip" onClick={handleSkip}/>
        </div>
    );
};

export default Setup;
