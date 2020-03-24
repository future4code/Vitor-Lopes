import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'


function mapDispatchToProps(dispatch) {
  return {
    goToLoginPage: () => dispatch(push("/login")),
    goToTripsCreate: () => dispatch(push("/trips/create")),
  };
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        HomePage
        <button onClick={this.props.goToTripsCreate}>ir para TripsCreate</button>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);

