import React from "react";
import Record from '../components/Record';

const Results = () => {
    const transcript = JSON.parse(localStorage.getItem("recording_content_analysis")) || {};
    const words = [];
    var idx = 0;

    try {
        transcript.words.forEach((element) => {
            const obj = {
                word: element.text,
                confidence: element.confidence,
                squiggle: (element.confidence < 0.7 ? true : false),
                color: ""
            }
            words.push(obj);
        })
        transcript.sentiment_analysis_results.forEach((element) => {
            const cnt = element.text.split(" ").length;
            for (let i = 0; i < cnt && idx < transcript.words.length; i++, idx++) {
                words[idx].color = "";
                if (element.sentiment == "POSITIVE") words[idx].color = "green";
                else if (element.sentiment == "NEGATIVE") words[idx].color = "red";
            }
        })
    } catch (e) {
        console.error(e);
    }
    console.log(words);

    return (
        <div className="pt-32 mx-10 h-screen">
            <div className="flex justify-center text-center">
                <h2 className='py-4 my-4 text-xl font-bold border-b pb-4 w-[50%]'>
                    Your Performance
                </h2>
            </div>
            <div className="justify-center flex">
                <audio src={localStorage.getItem("recorderFileName")} controls />
            </div>
            <div className="ml-20 mr-20">
                <p>{transcript["text"]}</p>
            </div>
        </div>
    );
}

export default Results;
