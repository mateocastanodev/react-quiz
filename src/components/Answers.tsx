import { useRef } from "react";

interface AnswersProps {
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  onSelect: (selectedAnswer: string) => void;
}

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) {
  const shuffledAnswers = useRef<string[]>();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((el: string) => {
        let cssClass = "";
        const isSelected = selectedAnswer === el;
        if (answerState === "answered" && isSelected) cssClass = "selected";
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        )
          cssClass = answerState;
        return (
          <li key={el} className="answer">
            <button onClick={() => onSelect(el)} className={cssClass}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
