import { useMemo } from "react";

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
  const shuffledAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [answers]);

  return (
    <ul id="answers">
      {shuffledAnswers.map((el: string) => {
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
            <button
              onClick={() => onSelect(el)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
