import React from "react";
import logo from "../assets/header-logo.png";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="london-marathon-logo" className="header-logo" />
    </div>
  );
};

export default Header;
