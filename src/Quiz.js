import React, { useState } from 'react';
import HighScores from './HighScores';
import Question from './Question';
import QuizComplete from './QuizComplete';
import StartQuiz from './StartQuiz';

function Quiz() {

  const [isClicked, setIsClicked] = useState(false);
  const [question, setQuestion] = useState(" ");
  const [answerOne, setAnswerOne] = useState(" ");
  const [answerTwo, setAnswerTwo] = useState(" ");
  const [answerThree, setAnswerThree] = useState(" ");
  const [answerFour, setAnswerFour] = useState(" ");
  const [questionAnswered, setQuestionAnswered] = useState(0);

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
        {isClicked === true && questionAnswered === 0 && (
          <Question 
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            question="Commonly used data types DO Not include:"
            answerOne="strings"
            answerTwo="booleans"
            answerThree="alerts"
            answerFour="numbers"
          />
        )}
        {questionAnswered === 1 && (
          <Question 
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            question="The condition in an if/else statement is inclosed with _________."
            answerOne="queries"
            answerTwo="curly brackets"
            answerThree="parenthesis"
            answerFour="square brackets"
          />  
        )}
        {/* <QuizComplete /> */}
        {/* <HighScores /> */}
      </div>
    </div>
  )
};


export default Quiz;


