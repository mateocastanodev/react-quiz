import quizComplete from "../assets/congratulations.png";
import { useTranslation } from 'react-i18next';

interface SummaryProps {
  userAnswers: string[];
  questions: { text: string; answers: string[] }[];
}

const Summary = ({ userAnswers, questions }: SummaryProps) => {
  const { t } = useTranslation();
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => t(answer) === t(questions[index].answers[0])
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>{t('quiz_completed')}</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">{t('skipped')}</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">{t('answered_correctly')}</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">{t('answered_incorrectly')}</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer: string, index: number) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (t(answer) === t(questions[index].answers[0])) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{t(questions[index].text)}</p>
              <p className={cssClass}>{answer ? t(answer) : t('skipped_answer')}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;