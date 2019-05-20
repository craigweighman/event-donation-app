import React from "react";
import { Doughnut } from "react-chartjs-2";
import logo from "../assets/android-chrome-192x192.png";
import "../style/ParticipantListCard.css";

const ParticipantListCard = ({ participant }) => {
  const data = {
    labels: ["RAISED", "TARGET"],

    datasets: [
      {
        data: [
          Math.floor(participant.totalRaisedPercentageOfFundraisingTarget) > 100
            ? 100
            : Math.floor(participant.totalRaisedPercentageOfFundraisingTarget),
          Math.floor(participant.totalRaisedPercentageOfFundraisingTarget) > 100
            ? 0
            : 100 -
              Math.floor(participant.totalRaisedPercentageOfFundraisingTarget)
        ],
        backgroundColor: ["#243488", "#cc0000"],
        hoverBackgroundColor: ["#11297b	", "#bc0000"],
        borderWidth: 0
      }
    ]
  };

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
        {
          <span className="total-raised">
            {participant.currencySymbol +
              Math.floor(
                Number(participant.totalRaisedOffline) +
                  Number(participant.totalRaisedOnline) +
                  Number(participant.totalRaisedSms)
              )}
          </span>
        }

        {<span className="raised-of">{"raised of"}</span>}
        {
          <span className="target-number">
            {participant.currencySymbol +
              Math.floor(participant.fundraisingTarget)}
          </span>
        }
        {<span className="target">{"target"}</span>}
      </div>

      <div className="ParticipantListCard-chart">
        <Doughnut
          data={data}
          options={{
            cutoutPercentage: 30,
            rotation: -0.5 * Math.PI,
            legend: {
              display: false
            }
          }}
        />
      </div>
      <div className="ParticipantListCard-percentage">
        {
          <span
            className={
              participant.totalRaisedPercentageOfFundraisingTarget < 100
                ? "percentage-raised-red"
                : "percentage-raised-blue"
            }
          >
            {Math.floor(participant.totalRaisedPercentageOfFundraisingTarget)}
          </span>
        }
        {<span className="percent">{"%"}</span>}
      </div>
    </div>
  );
};

export default ParticipantListCard;
