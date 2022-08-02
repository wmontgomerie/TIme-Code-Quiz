import React from 'react';

function HighScores({setIsClicked, setQuestionAnswered, setFinalSubmit}) {

  const goBackHandler = () => {
    setIsClicked(false);
    setQuestionAnswered(0);
    setFinalSubmit(false);
  }

  return (
    <div id="scores">
      <h1>High Scores</h1>
      <div id="high">
        <h3 id="score">1. AB - 22</h3>
      </div>
      <div>
        <button type="button" className='question-btn' onClick={goBackHandler}>Go back</button>
        <button type="button" className='question-btn'>Clear high scores</button>
      </div>
    </div>
  )
};

export default HighScores;
