import React from "react";
import DonateButton from "../components/DonateButton.js";
import "../style/Donate.css";

const Donate = () => {
  return (
    <div className="Donate">
      <DonateButton value={5} />
      <DonateButton value={10} />
      <DonateButton value={20} />
    </div>
  );
};

export default Donate;
