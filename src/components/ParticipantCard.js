import React from "react";
import "../style/ParticipantCard.css";

const ParticipantCard = ({ participant }) => {
  return <div className="ParticipantCard">{participant.owner}</div>;
};

export default ParticipantCard;
