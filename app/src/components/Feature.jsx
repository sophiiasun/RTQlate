import React from 'react';

const Features = () => {
  return (
    <div className="mt-48 mx-6">
      <div className="text-5xl my-8 flex justify-center">
        What does &nbsp; <span className="emphasis">
          RTQ
          </span> &nbsp; stand for?
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className='text-4xl my-6'>
            01
          </div>
          <div className='text-2xl my-4'>
            <span className="underline">R</span>eal-Time Feedback
          </div>
          RTQlit provides instant, real-time feedback on your speech, ensuring you receive immediate insights and corrections.
        </div>
        <div>
          <div className='text-4xl my-6'>
            02
          </div>
          <div className='text-2xl my-4'>
            <span className="underline">T</span>ime Management Tools
          </div>
          Master the art of pacing and timing with our built-in time management tools, ensuring your presentations are impactful and well-timed.
        </div>
        <div>
          <div className='text-4xl my-6'>
            03
          </div>
          <div className='text-2xl my-4'>
            <span className="underline">Q</span>uality Suggestions
          </div>
          Elevate your communication skills with personalized quality improvement suggestions. 
          RTQlit analyzes your speech patterns, offering tailored recommendations for continuous improvement.
        </div>
      </div>
    </div>
  );
};

export default Features;
