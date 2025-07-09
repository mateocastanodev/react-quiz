import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Menu from "./components/Menu";
import CodeLive from "./components/CodeLive";
import questions from "./questions";

function App() {
  const [appMode, setAppMode] = useState<"menu" | "quiz" | "code-live">("menu");
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const handleSelectDifficulty = (
    selectedDifficulty: "beginner" | "intermediate" | "advanced"
  ) => {
    setDifficulty(selectedDifficulty);
    setAppMode("quiz");
  };

  const handleSelectMode = (mode: "quiz" | "code-live") => {
    setAppMode(mode);
  };

  let content;

  if (appMode === "menu") {
    content = <Menu onSelectDifficulty={handleSelectDifficulty} onSelectMode={handleSelectMode} />;
  } else if (appMode === "quiz") {
    content = <Quiz questions={questions[difficulty!]} />;
  } else if (appMode === "code-live") {
    content = <CodeLive />;
  }

  return (
    <>
      <Header />
      <main>{content}</main>
    </>
  );
}

export default App;
