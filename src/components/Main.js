import React, { Component } from "react";
import Participant from "../components/Participant.js";
import "../style/Main.css";

class Main extends Component {
  state = {
    participants: []
  };

  render() {
    return (
      <div className="Main">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </div>
    );
  }
}

export default Main;
