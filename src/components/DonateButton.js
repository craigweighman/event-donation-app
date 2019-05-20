import React from "react";
import "../style/DonateButton.css";

const DonateButton = ({ value }) => {
  return <div className="DonateButton">{`Donate £${value}`}</div>;
};

export default DonateButton;
