import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const QUESTION_TIME = 10000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnwser = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        index={activeQuestionIndex}
        questionTime={QUESTION_TIME}
        handleSkipAnwser={handleSkipAnwser}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
