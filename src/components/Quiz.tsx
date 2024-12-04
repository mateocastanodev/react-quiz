import { useCallback, useRef, useState } from "react";
import quizComplete from "../assets/congratulations.png";
import questionsData from "../questions";
import QuestionTimer from "./QuestionTimer";

interface Question {
  text: string;
  answers: string[];
}

const questions: Question[] = questionsData;

const Quiz = () => {
  const shuffledAnswers = useRef<string[]>();
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer: any) => {
      setAnswerState(selectedAnswer);
      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setTimeout(() => {
        if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => setAnswerState(""), 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...questions[activeQuestionIndex].answers].sort(
      () => Math.random() - 0.5
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((el: string) => {
            let cssClass = "";
            const isSelected = userAnswers[userAnswers.length - 1] === el;
            if (answerState === "answered" && isSelected) cssClass = "selected";
            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            )
              cssClass = answerState;
            return (
              <li key={el} className="answer">
                <button
                  onClick={() => handleSelectAnswer(el)}
                  className={cssClass}
                >
                  {el}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
