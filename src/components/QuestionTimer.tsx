import React, { useEffect } from "react";

interface QuestionTimerProps {
  timeout: number;
  onTimeout: (() => void) | null;
  mode: string;
}

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: QuestionTimerProps) {
  const [remainingTime, setRemainingTime] = React.useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev: any) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
