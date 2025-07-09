import Button from "@mui/material/Button";
import { useTranslation } from 'react-i18next';

interface MenuProps {
  onSelectDifficulty: (difficulty: "beginner" | "intermediate" | "advanced") => void;
  onSelectMode: (mode: "quiz" | "code-live") => void;
}

const Menu = ({ onSelectDifficulty, onSelectMode }: MenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="menu">
      <h2>{t('choose_difficulty')}</h2>
      <Button onClick={() => onSelectDifficulty("beginner")} variant="contained">{t('beginner')}</Button>
      <Button onClick={() => onSelectDifficulty("intermediate")} variant="contained">{t('intermediate')}</Button>
      <Button onClick={() => onSelectDifficulty("advanced")} variant="contained">{t('advanced')}</Button>
      <Button onClick={() => onSelectMode("code-live")} variant="contained">{t('code_live')}</Button>
    </div>
  );
};

export default Menu;
