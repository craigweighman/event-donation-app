import React from "react";
import "../style/ParticipantListCard.css";

const ParticipantListCard = ({ participant }) => {
  return <div className="ParticipantListCard">{participant.owner}</div>;
};

export default ParticipantListCard;
