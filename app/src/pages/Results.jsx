import React from "react";
import Record from '../components/Record';
import EyeChart from '../components/EyeChart';

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

    const testWords = [
        {word: 'Transcribe', confidence: 0.73106, squiggle: false, color: 'red'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'and', confidence: 0.96, squiggle: false, color: ''},
        {word: 'Joe', confidence: 0.52503, squiggle: true, color: ''},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'and', confidence: 0.96, squiggle: false, color: ''},
        {word: 'Joe', confidence: 0.52503, squiggle: true, color: ''},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'and', confidence: 0.96, squiggle: false, color: ''},
        {word: 'Joe', confidence: 0.52503, squiggle: true, color: ''},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'and', confidence: 0.96, squiggle: false, color: ''},
        {word: 'Joe', confidence: 0.52503, squiggle: true, color: ''},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'test', confidence: 0.7718, squiggle: false, color: 'green'},
        {word: 'and', confidence: 0.96, squiggle: false, color: ''},
        {word: 'Joe', confidence: 0.52503, squiggle: true, color: ''},
        {word: 'Biden.', confidence: 0.99833, squiggle: false, color: ''}
    ];

    return (
        <div className="pt-32 mx-10 h-screen text-black/90">
            <div className="flex justify-center text-center">
                <h2 className='py-4 my-4 text-xl font-bold border-b pb-4 w-[50%]'>
                    Your Performance
                </h2>
            </div>
            <div className="justify-center flex">
                <audio src={localStorage.getItem("recorderFileName")} controls />
            </div>
            {transcript? (
                <div className="text-center mt-8 pt-2 text-lg font-semibold text-black/80">
                    Transcribed text:
                </div>
            ) : 
                (
                    <div></div>
                )
            }
            <div className="justify-content flex">
            <div className="mx-20 text-center my-5 justify-content flex">
                {/* change testWords to words before demo!!! */}
                <p className="">
                    {testWords.map((wordObj, index) => (
                        <span key={index} 
                                className={wordObj.squiggle ? 'wavy' : ''}
                                style={{ color: wordObj.color,  }}>
                            {wordObj.word}{' '}
                            <span className="confidence p-1 rounded-lg border"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateX(-150%)',
                                background: 'white',
                            }}>
                                Confidence Level: {" "}
                                {wordObj.confidence}</span>
                        </span>
                    ))}
                </p>
            </div>
            </div>
        </div>
    );
}

export default Results;
