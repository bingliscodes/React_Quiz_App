import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  questionTime,
  handleSkipAnwser,
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer questionTime={questionTime} onTimeout={handleSkipAnwser} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
