import QuestionTimer from "./QuestionTimer";
import { useState } from "react";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

export default function Question({
  questionTime,
  handleSkipAnwser,
  onSelectAnswer,
  index,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer;
      }, 2000);
    }, 1000);
  }
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer questionTime={questionTime} onTimeout={handleSkipAnwser} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
