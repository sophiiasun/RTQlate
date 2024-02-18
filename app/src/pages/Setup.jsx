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
        <div className="pt-28 mx-10 h-screen flex justify-center"> 
            <div className="w-[50%] mt-10">
                <h1 className="my-4 text-xl font-bold border-b pb-4 flex justify-between">
                    Enter your script below :{" "}
                    <span className="text-gray-400 font-medium italic text-lg">(optional)</span>
                </h1>
                <div>
                    <textarea id="script" name="script" onChange={handleChange}
                                placeholder='Paste your script here...' value={text}
                                className="w-full border-neutral-300 border rounded-lg p-4 min-h-12"/>
                    <br></br>
                    <div className="flex justify-evenly">
                        <input type="submit" value="Submit" onClick={handleSubmit}
                                className="px-4 p-2 my-5 border border-black rounded-full hover:cursor-pointer"/>
                    </div>
                    {/* <div className="flex justify-evenly font-bold">
                        OR
                    </div> */}
                    <div className="my-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center text-inter font-semibold">or</p>
                    </div>
                    <div className="flex justify-evenly">
                        <input type="submit" value="Skip →" onClick={handleSkip}
                                className="px-4 p-2 my-5 underline hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setup;
