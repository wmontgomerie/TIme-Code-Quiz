import React, { useState } from 'react';
import HighScores from './HighScores';
import Question from './Question';
import QuizComplete from './QuizComplete';
import StartQuiz from './StartQuiz';

function Quiz() {

  const [isClicked, setIsClicked] = useState(false);
  // const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div id="timequiz">
      <div id="scoretime">
        <a href='#' id="scores">View High Scores</a>
        <h3>Time: 75</h3>
      </div>
      <div id="quizcontainer">
        {isClicked === false && (
         <StartQuiz setIsClicked={setIsClicked}/>
        )}
        {isClicked === true && (
           <Question />
        )}
       
        {/* <QuizComplete /> */}
        {/* <HighScores /> */}
      </div>
    </div>
  )
};

export default Quiz;


