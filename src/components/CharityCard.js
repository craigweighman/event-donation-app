import React from "react";
import "../style/CharityCard.css";

const CharityCard = ({ charity }) => {
  return <div className="CharityCard">{charity.name}</div>;
};

export default CharityCard;
