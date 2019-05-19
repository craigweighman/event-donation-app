import React from "react";
import Thermometer from "react-thermometer";
import logo from "../assets/android-chrome-192x192.png";
import "../style/ParticipantListCard.css";

const ParticipantListCard = ({ participant }) => {
  return (
    <div className="ParticipantListCard">
      <img
        src={
          participant.ownerProfileImageUrls.Size150x150Face
            ? participant.ownerProfileImageUrls.Size150x150Face
            : logo
        }
        alt="participant"
        className="ParticipantListCard-image"
      />
      <div className="ParticipantListCard-owner">{participant.owner}</div>
      <div className="ParticipantListCard-raised">
        {Number(participant.totalRaisedOffline) +
          Number(participant.totalRaisedOnline) +
          Number(participant.totalRaisedSms)}
      </div>

      <div className="ParticipantListCard-target">
        {participant.fundraisingTarget}
      </div>

      <div className="ParticipantListCard-percentage">
        {participant.totalRaisedPercentageOfFundraisingTarget}
      </div>
      <div className="ParticipantListCard-thermometer">
        <Thermometer
          min={0}
          max={
            participant.totalRaisedPercentageOfFundraisingTarget > 100
              ? participant.totalRaisedPercentageOfFundraisingTarget
              : 100
          }
          width={10}
          height={175}
          backgroundColor={"#dedede"}
          fillColor={"#cc0000"}
          current={participant.totalRaisedPercentageOfFundraisingTarget}
        />
      </div>
    </div>
  );
};

export default ParticipantListCard;
