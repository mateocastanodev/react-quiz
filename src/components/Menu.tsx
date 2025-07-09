import Button from "@mui/material/Button";

interface MenuProps {
  onSelectDifficulty: (difficulty: "beginner" | "intermediate" | "advanced") => void;
}

const Menu = ({ onSelectDifficulty }: MenuProps) => {
  return (
    <div className="menu">
      <h2>Choose your difficulty</h2>
      <Button onClick={() => onSelectDifficulty("beginner")} variant="contained">Beginner</Button>
      <Button onClick={() => onSelectDifficulty("intermediate")} variant="contained">Intermediate</Button>
      <Button onClick={() => onSelectDifficulty("advanced")} variant="contained">Advanced</Button>
    </div>
  );
};

export default Menu;
