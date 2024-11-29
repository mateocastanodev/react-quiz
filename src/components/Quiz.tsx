import { useState } from "react";
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
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = (selectedAnswer: any) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
  };
  const shuffledAnswers =
    !quizComplete &&
    [...questions[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

  return !quizIsComplete ? (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {questions[activeQuestionIndex].answers.map((el: string) => (
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
