import { useEffect, useState } from "react";

export default function QuestionTimer({ questionTime }) {
  const [remainingTime, setRemainingTime] = useState(questionTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return <progress value={remainingTime} max={questionTime} />;
}
