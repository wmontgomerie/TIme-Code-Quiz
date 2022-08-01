import React from 'react';
import RightOrWrong from './RightOrWrong';

function Question({setRightOrWrong, setQuestionClicked}) {

  const questionClickHandler = () => {
    alert("this question button works!");
  };



  return (
    <div id="question">
      <h1>
        The condition in an if/else statement is inclosed with 
        _________.
      </h1>
      <div id="btn-group">
        <button 
          type="button" 
          className='question-btn'
          onClick={questionClickHandler}
        >
          1. queries
        </button>
        <button 
          type="button" 
          className='question-btn'
          onClick={questionClickHandler}
        >
          2. curly brackets
        </button>
        <button
          type="button"
          className='question-btn'
          onClick={questionClickHandler}
        >
          3. parenthesis
        </button>
        <button 
          type="button" 
          className='question-btn'
          onClick={questionClickHandler}
        >
          4. square brackets
        </button>
      </div>  
      <RightOrWrong />
    </div>
  )
};

export default Question;
