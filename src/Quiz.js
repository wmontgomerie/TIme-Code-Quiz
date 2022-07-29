import React from 'react';
import Question from './Question';
import QuizComplete from './QuizComplete';
import StartQuiz from './StartQuiz';

function Quiz() {
  return (
    <div id="timequiz">
      <div id="scoretime">
        <a href='#' id="scores">View High Scores</a>
        <h3>Time: 75</h3>
      </div>
      <div id="quizcontainer">
        {/* <StartQuiz /> */}
        {/* <Question /> */}
        <QuizComplete />
      </div>
    </div>
  )
};

export default Quiz;


