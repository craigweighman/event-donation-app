import React from "react";
import logo from "../assets/footer-logo.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="goodbox-logo" className="footer-logo" />
    </div>
  );
};

export default Footer;
