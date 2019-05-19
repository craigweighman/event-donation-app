import React, { Component } from "react";
import * as api from "../api/api.js";
import ParticipantCard from "../components/ParticipantCard.js";
import "../style/Participant.css";

class Participant extends Component {
  state = {
    isLoading: true,
    isError: false,
    participant: {}
  };

  render() {
    const { participant } = this.state;

    return (
      <div className="Participant">
        <ParticipantCard participant={participant} />
      </div>
    );
  }

  componentDidMount = props => {
    this.fetchParticipantById();
    this.setState({ isLoading: false });
  };

  fetchParticipantById = () => {
    const { participantId } = this.props;
    api
      .getParticipantById(participantId)
      .then(({ data }) => {
        this.setState({ participant: data });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Participant;
