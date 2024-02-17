import React from 'react';
import axios from 'axios';
import {useState} from 'react';

const Setup = () => {
    const [text, setText] = useState("");

    function getRequest() {
        console.log(text);
        axios.post(`http://127.0.0.1:5000/summarize`, {
            text: text
        })
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

    

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <h1>Upload your script here</h1>
            <input type="text" id="script" name="script" onChange={handleChange}/><br></br>
            <input type="submit" value="Submit" onClick={getRequest}/>
            <input type="submit" value="Skip" onClick={getRequest}/>
        </>
    );
};

export default Setup;
