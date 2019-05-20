import React from "react";
import Donate from "../components/Donate.js";
import "../style/ParticipantCard.css";

const ParticipantCard = ({ participant }) => {
  console.log(participant.image);
  return (
    <div className="ParticipantCard">
      <img
        src={participant.image.absoluteUrl}
        alt={participant.owner}
        className="ParticipantCard-image"
      />
      <div className="ParticipantCard-description">{participant.title}</div>
      <Donate />
      <div className="ParticipantCard-thankyouMessage">{participant.title}</div>

      <div className="ParticipantCard-registrationNumber">
        {participant.owner}
      </div>
    </div>
  );
};

export default ParticipantCard;
