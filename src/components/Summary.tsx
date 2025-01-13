import quizComplete from "../assets/congratulations.png";
import questionsData from "../questions";
interface Summary {
  userAnswers: string[];
}
const Summary = ({ userAnswers }: Summary) => {
  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer: string, index: number) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questionsData[index].text}</p>
              <p className="user-answer">{answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
