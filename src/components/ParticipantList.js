import React from "react";
import { Link } from "@reach/router";
import ParticipantListCard from "../components/ParticipantListCard.js";
import "../style/ParticipantList.css";

const ParticipantList = ({ participants }) => {
  return (
    <div className="ParticipantList">
      {participants.map(participant => {
        return (
          <Link
            to={`/participant/${participant.pageId}`}
            key={participant.pageId}
          >
            <ParticipantListCard participant={participant} />
          </Link>
        );
      })}
    </div>
  );
};

export default ParticipantList;
