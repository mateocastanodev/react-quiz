import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="logo-container">
        <h1 className="logo-text">Q</h1>
      </div>
      <h1>{t('app_title')}</h1>
      <div>
        <Button onClick={() => changeLanguage('en')} variant="contained" size="small">EN</Button>
        <Button onClick={() => changeLanguage('es')} variant="contained" size="small" style={{ marginLeft: '10px' }}>ES</Button>
      </div>
    </header>
  );
};

export default Header;
