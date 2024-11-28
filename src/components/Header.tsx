import React from "react";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="logo platform" className="logo" />
    </header>
  );
};

export default Header;
