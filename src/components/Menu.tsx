import Button from "@mui/material/Button";

interface MenuProps {
  onSelectDifficulty: (difficulty: "beginner" | "intermediate" | "advanced") => void;
  onSelectMode: (mode: "quiz" | "code-live") => void;
}

const Menu = ({ onSelectDifficulty, onSelectMode }: MenuProps) => {
  return (
    <div className="menu">
      <h2>Choose your difficulty</h2>
      <Button onClick={() => onSelectDifficulty("beginner")} variant="contained">Beginner</Button>
      <Button onClick={() => onSelectDifficulty("intermediate")} variant="contained">Intermediate</Button>
      <Button onClick={() => onSelectDifficulty("advanced")} variant="contained">Advanced</Button>
      <Button onClick={() => onSelectMode("code-live")} variant="contained">Code Live</Button>
    </div>
  );
};

export default Menu;
