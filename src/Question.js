import React, { useState } from 'react';
import RightOrWrong from './RightOrWrong';

function Question({questionAnswered, setQuestionAnswered, question, answerOne, answerTwo, answerThree, answerFour, correct}) {

  const [rightOrWrong, setRightOrWrong] = useState(" ");
  
  const questionClickHandler = (e) => {
    setQuestionAnswered(questionAnswered + 1);
    console.log(e.target.value);
  };
  
  return (
    <div id="question">
      <h1>
        {question}
      </h1>
      <div id="btn-group">
        <button 
          type="button" 
          className='question-btn'
          onClick={(e) => questionClickHandler()}
        >
          1. {answerOne}
        </button>
        <button 
          type="button" 
          className='question-btn'
          onClick={questionClickHandler}
        >
          2. {answerTwo}
        </button>
        <button
          type="button"
          className='question-btn'
          onClick={questionClickHandler}
        >
          3. {answerThree}
        </button>
        <button 
          type="button" 
          className='question-btn'
          onClick={questionClickHandler}
        >
          4. {answerFour}
        </button>
      </div>  
      <RightOrWrong />
    </div>
  )
};

export default Question;
