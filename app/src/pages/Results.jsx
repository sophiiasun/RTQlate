import React from "react";
import Record from '../components/Record';

const Results = () => {
    const transcript = JSON.parse(localStorage.getItem("recording_content_analysis"));
    const words = [];
    var idx = 0;
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
    // console.log(words);

    return (
        <>
            <h2 className='pt-40 pt-20'>Your Performance</h2>
            <audio src={localStorage.getItem("recorderFileName")} controls />
            <div className="ml-20 mr-20">
                <p>{transcript["text"]}</p>
            </div>
        </>
    );
}

export default Results;
