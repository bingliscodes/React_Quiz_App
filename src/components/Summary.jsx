import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((ans) => ans === null);
  const correctAnswers = userAnswers.filter(
    (ans, idx) => ans === QUESTIONS[idx].answers[0]
  );

  const skippedAnswersPortion = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPortion = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersPortion =
    100 - skippedAnswersPortion - correctAnswersPortion;

  return (
    <div id="summary">
      <img src={quizComplete} alt="Tropcy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPortion}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPortion}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPortion}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, idx) => {
          let cssClass = "user-answer";

          if (ans === null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[idx].answers[0]) {
            cssClass += " correct";
          } else cssClass += " wrong";

          return (
            <li key={idx}>
              <h3>Question #{idx + 1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className="user-answer">{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
