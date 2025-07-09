import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import { useTranslation } from 'react-i18next';

interface QuestionProps {
  questionIndex: number;
  onSelectAnswer: (selectedAnswer: string) => void;
  onSkipAnswer: () => void;
  questions: { id: string; text: string; answers: string[] }[];
}

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
  questions,
}: QuestionProps) {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState<{
    selectedAnswer: string;
    isCorrect: boolean | null;
  }>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 30000;

  if (answer.selectedAnswer) timer = 1000;

  if (answer.isCorrect !== null) timer = 2000;

  function handleSelectAnswer(answersSelected: string) {
    setAnswer({ selectedAnswer: answersSelected, isCorrect: null });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answersSelected,
        isCorrect: answersSelected === t(questions[questionIndex].answers[0]),
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
      <h2>{t(questions[questionIndex].text)}</h2>
      <Answers
        answers={questions[questionIndex].answers.map(key => t(key))}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}