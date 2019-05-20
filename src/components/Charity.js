import React, { Component } from "react";
import * as api from "../api/api.js";
import CharityCard from "../components/CharityCard.js";
import "../style/Charity.css";

class Charity extends Component {
  state = {
    isLoading: true,
    isError: false,
    charity: {}
  };

  render() {
    const { charity } = this.state;

    return (
      <div>
        {charity.name && (
          <div className="Charity">
            <CharityCard charity={charity} />
          </div>
        )}
      </div>
    );
  }

  componentDidMount = props => {
    this.fetchCharityById();
    this.setState({ isLoading: false });
  };

  fetchCharityById = () => {
    const { charityId } = this.props;
    api
      .getCharityById(charityId)
      .then(({ data }) => {
        this.setState({ charity: data });
      })
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Charity;
