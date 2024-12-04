import { useCallback, useState } from "react";
import quizComplete from "../assets/congratulations.png";
import questionsData from "../questions";
import QuestionTimer from "./QuestionTimer";

interface Question {
  text: string;
  answers: string[];
}

const questions: Question[] = questionsData;

interface Question {
  text: string;
  answers: string[];
}

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback((selectedAnswer: any) => {
    setAnswerState(selectedAnswer);
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
    setTimeout(() => {
      if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
    }, 1000);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  let shuffledAnswers: string[] | undefined;

  if (!quizIsComplete) {
    shuffledAnswers = [...questions[activeQuestionIndex].answers].sort(
      () => Math.random() - 0.5
    );
  }

  return !quizIsComplete ? (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {(shuffledAnswers || []).map((el: any) => (
            <li key={el} className="answer">
              <button onClick={() => handleSelectAnswer(el)}>{el}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
    </div>
  );
};

export default Quiz;
