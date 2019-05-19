import React from "react";
import ParticipantListCard from "../components/ParticipantListCard.js";
import "../style/ParticipantList.css";

const ParticipantList = ({ participants }) => {
  return (
    <div className="ParticipantList">
      {participants.map(participant => {
        return (
          <ParticipantListCard
            key={participant.pageId}
            participant={participant}
          />
        );
      })}
    </div>
  );
};

export default ParticipantList;
