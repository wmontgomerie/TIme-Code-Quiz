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
  const [finalSubmit, setFinalSubmit] = useState(false);
  const [correct, setCorrect] = useState(" ");

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
            correct="alerts"
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
            correct="parenthesis"
          />  
        )}
        {questionAnswered === 2 && (
          <Question 
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            question="Arrays in javascript can be used to store ____________."
            answerOne="numbers and strings"
            answerTwo="other arrays"
            answerThree="booleans"
            answerFour="all of the above"
            correct="all of the above"
          />  
        )}
        {questionAnswered === 3 && (
          <Question 
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            question="String values must be enclosed within ____________ when being assigned to variables."
            answerOne="commas"
            answerTwo="curly brackets"
            answerThree="quotes"
            answerFour="parenthesis"
            correct="quotes"
          />  
        )}
        {questionAnswered === 4 && (
          <Question 
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            question="A very useful tool used during development and debugging for printing content to the debugger is:"
            answerOne="Javascript"
            answerTwo="terminal/bash"
            answerThree="four loops"
            answerFour="console.log"
            correct="console.log"
          />  
        )}
        {questionAnswered === 5 && finalSubmit === false && (
          <QuizComplete setFinalSubmit={setFinalSubmit} />
        )}
        {finalSubmit === true && questionAnswered === 5 && (
          <HighScores setIsClicked={setIsClicked} setQuestionAnswered={setQuestionAnswered} setFinalSubmit={setFinalSubmit} />
        )}   
      </div>
    </div>
  )
};


export default Quiz;


