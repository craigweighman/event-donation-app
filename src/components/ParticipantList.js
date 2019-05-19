import React from "react";
import Participant from "../components/Participant.js";
import "../style/ParticipantList.css";

const ParticipantList = () => {
  return (
    <div className="ParticipantList">
      <Participant />
      <Participant />
      <Participant />
    </div>
  );
};

export default ParticipantList;
