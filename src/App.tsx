import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Menu from "./components/Menu";
import questions from "./questions";

function App() {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const handleSelectDifficulty = (
    selectedDifficulty: "beginner" | "intermediate" | "advanced"
  ) => {
    setDifficulty(selectedDifficulty);
  };

  return (
    <>
      <Header />
      <main>
        {difficulty ? (
          <Quiz questions={questions[difficulty]} />
        ) : (
          <Menu onSelectDifficulty={handleSelectDifficulty} />
        )}
      </main>
    </>
  );
}

export default App;
