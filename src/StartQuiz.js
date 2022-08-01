import React, { useState } from 'react';

function StartQuiz({setIsClicked}) {  

  const buttonHandler = () => {
    // alert("the button is working!");
    setIsClicked(true);
  }

  return (
    <div>
      <h1>Coding Quiz Challenge</h1>
      <p>
        Try to answer the following code-related questions 
        within the time limit. Keep in mind that incorrect answers
        will penalize your score/time by ten seconds!
      </p>
      <button 
        type="button" 
        id="startbutton" 
        onClick={buttonHandler}
      >
        Start Quiz
      </button>
    </div>
  )
};

export default StartQuiz;
