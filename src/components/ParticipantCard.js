import React from "react";
import { Link } from "@reach/router";
import Donate from "../components/Donate.js";
import "../style/ParticipantCard.css";

const ParticipantCard = ({ participant }) => {
  return (
    <div className="ParticipantCard">
      <img
        src={participant.image.absoluteUrl}
        alt={participant.owner}
        className="ParticipantCard-image"
      />
      <div className="ParticipantCard-title">{participant.title}</div>
      <Donate />
      <div className="ParticipantCard-story">
        {participant.story.length <= 300
          ? participant.story
          : participant.story.slice(0, 300) + "..."}
      </div>
      <div className="participating-for">I'm raising money for:</div>
      <Link to={`/charity/${participant.charity.id}`}>
        <img
          src={participant.charity.logoAbsoluteUrl}
          alt={participant.charity.name}
          className="charity-logo"
        />
      </Link>
    </div>
  );
};

export default ParticipantCard;
