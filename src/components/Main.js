import React, { Component } from "react";
import { Router } from "@reach/router";
import ParticipantList from "../components/ParticipantList.js";
import Donate from "../components/Donate.js";
import Charity from "../components/Charity.js";
import "../style/Main.css";

class Main extends Component {
  state = {
    participants: []
  };

  render() {
    return (
      <div className="Main">
        <Router>
          <ParticipantList path="/" />
          <Donate path="/:participant_id" />
          <Charity path="/:charity_id" />
        </Router>
      </div>
    );
  }
}

export default Main;
