import { useState } from "react";
import questionsData from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

interface QuestionProps {
  questionIndex: number;
  onSelectAnswer: (selectedAnswer: string) => void;
  onSkipAnswer: () => void;
  key: number;
}

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}: QuestionProps) {
  const [answer, setAnswer] = useState<{
    selectedAnswer: string;
    isCorrect: boolean | null;
  }>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) timer = 1000;

  if (answer.isCorrect !== null) timer = 2000;

  function handleSelectAnswer(answersSelected: string) {
    setAnswer({ selectedAnswer: answersSelected, isCorrect: null });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answersSelected,
        isCorrect: answersSelected === questionsData[questionIndex].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answersSelected);
      }, 2000);
    }, 1000);
  }
  let answerState: string = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
        key={timer}
      />
      <h2>{questionsData[questionIndex].text}</h2>
      <Answers
        answers={questionsData[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
