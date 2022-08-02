import React from 'react';
import RightOrWrong from './RightOrWrong';

function Question({questionAnswered, setQuestionAnswered, question, answerOne, answerTwo, answerThree, answerFour}) {

  const questionClickHandler = () => {
    setQuestionAnswered(questionAnswered + 1);
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
          onClick={questionClickHandler}
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
