import { useCallback, useState } from "react";
import quizComplete from "../assets/congratulations.png";
import questionsData from "../questions";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

interface Question {
  text: string;
  answers: string[];
}

const questions: Question[] = questionsData;

const Quiz = () => {
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

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <Answers
          answers={questions[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
