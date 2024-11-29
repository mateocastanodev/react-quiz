import React, { useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }: any) {
  const [remainingTime, setRemainingTime] = React.useState(timeout);
  console.log(remainingTime);
  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev: any) => prev - 1000);
    }, 100);
  }, []);

  return <progress id="question-time" />;
}
