import React from "react";
import Donate from "../components/Donate.js";
import "../style/CharityCard.css";

const CharityCard = ({ charity }) => {
  return (
    <div className="CharityCard">
      <img
        src={charity.logoAbsoluteUrl}
        alt={charity.name}
        className="CharityCard-image"
      />
      <div className="CharityCard-description">{charity.description}</div>
      <Donate />
      <div className="CharityCard-thankyouMessage">
        {charity.thankyouMessage}
      </div>

      <div className="CharityCard-registrationNumber">
        {charity.registrationNumber}
      </div>
    </div>
  );
};

export default CharityCard;
