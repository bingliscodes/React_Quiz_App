import { useEffect, useState } from "react";

export default function QuestionTimer({ questionTime, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(questionTime);

  useEffect(() => {
    const timer = setTimeout(onTimeout, questionTime);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, questionTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={questionTime} />
  );
}
