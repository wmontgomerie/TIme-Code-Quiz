import React from 'react';
import RightOrWrong from './RightOrWrong';

function QuizComplete({setFinalSubmit}) {

  const submitHandler = () => {
    setFinalSubmit(true);
  }

  return (
    <div id="complete">
      <h1>All done!</h1>
      <h3>Your final score is 22.</h3>
      <div id="initials">
        <h3>Enter initials: </h3>
        <input type="text"/>
        <button type="button" id="submit-btn" onClick={submitHandler}>Submit</button>
      </div>
      <RightOrWrong />
    </div>
  )
};

export default QuizComplete;
