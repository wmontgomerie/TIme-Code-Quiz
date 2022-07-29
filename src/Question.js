import React from 'react';
import RightOrWrong from './RightOrWrong';

function Question() {
  return (
    <div id="question">
      <h1>
        The condition in an if/else statement is inclosed with 
        _________.
      </h1>
      <div id="btn-group">
        <button type="button" className='question-btn'>1. queries</button>
        <button type="button" className='question-btn'>2. curly brackets</button>
        <button type="button" className='question-btn'>3. parenthesis</button>
        <button type="button" className='question-btn'>4. square brackets</button>
      </div>  
      <RightOrWrong />
    </div>
  )
};

export default Question;
