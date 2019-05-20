import React from "react";
import { Link } from "@reach/router";
import logo from "../assets/header-logo.png";
import "../style/Header.css";

const Header = () => {
  return (
    <Link to={`/`}>
      <div className="Header">
        <img src={logo} alt="london-marathon-logo" className="header-logo" />
      </div>
    </Link>
  );
};

export default Header;
