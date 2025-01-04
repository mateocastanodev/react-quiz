import { useState } from "react";
import questionsData from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

interface QuestionProps {
  questionIndex: number;
  onSelectAnswer: (selectedAnswer: string) => void;
  onSkipAnswer: () => void;
}

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}: QuestionProps) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: false,
  });

  function handleSelectAnswer(answersSelected: string) {
    setAnswer({ selectedAnswer: answersSelected, isCorrect: false });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer.selectedAnswer,
        isCorrect: questionsData[questionIndex].answers[0] === answersSelected,
      });

      setTimeout(() => {
        onSelectAnswer(answersSelected);
      }, 2000);
    }, 1000);
  }

  let answerState: string = "";
  if (answer.selectedAnswer && answer.isCorrect !== undefined) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
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
