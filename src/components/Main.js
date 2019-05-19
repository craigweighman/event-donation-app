import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "../api/api.js";
import ParticipantList from "../components/ParticipantList.js";
import Donate from "../components/Donate.js";
import Charity from "../components/Charity.js";
import "../style/Main.css";

class Main extends Component {
  state = {
    isLoading: true,
    isError: false,
    participants: []
  };

  render() {
    const { participants } = this.state;
    console.log(participants);

    return (
      <div className="Main">
        <Router>
          <ParticipantList path="/" participants={participants} />
          <Donate
            path="/participant/:participant_id"
            participants={participants}
          />
          <Charity path="/charity/:charity_id" participants={participants} />
        </Router>
      </div>
    );
  }

  componentDidMount = props => {
    this.fetchParticipantsById();
    this.setState({ isLoading: false });
  };

  fetchParticipantsById = () => {
    const slicedArray = api.getRandomInteger(0, 14);
    const participantIdArray = api.pageId.slice(slicedArray, slicedArray + 5);
    api
      .getParticipantsById(participantIdArray)
      .then(data => {
        const participants = api.buildParticipantArray(data);
        this.setState({ participants });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Main;
