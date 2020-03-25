import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'

function mapDispatchToProps(dispatch) {
  return {
    goToTripsCreate: () => dispatch(push(routes.tripsCreate)),
    goToTripsList: () => dispatch(push(routes.tripsList)),
    goToTripsDetail: () => dispatch(push(routes.tripsDetails)),
  };
}

class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
        HomePage
        <button onClick={this.props.goToTripsCreate}>ir para TripsCreate</button>
        <button onClick={this.props.goToTripsList}>ir para goToTripsList</button>
        <button onClick={this.props.goToTripsDetail}>ir para goToTripsDetail</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(HomePage);

