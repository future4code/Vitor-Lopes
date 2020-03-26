import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'
import axios from 'axios'
import TripGrid from '../../Components/TripGrid'
import { getTrips } from '../../Actions/Trips'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    console.log(this.props.allTrips)
    return (
      <div>
        <Header />
        HomePage
        <button onClick={this.props.goToTripsCreate}>ir para TripsCreate</button>
        <button onClick={this.props.goToTripsList}>ir para goToTripsList</button>
        <button onClick={this.props.goToTripsDetail}>ir para goToTripsDetail</button>
        <TripGrid />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToTripsCreate: () => dispatch(push(routes.tripsCreate)),
    goToTripsList: () => dispatch(push(routes.tripsList)),
    goToTripsDetail: () => dispatch(push(routes.tripsDetails)),
    fetchTrips: () => dispatch(getTrips())
  };
}
function mapStateToProps(state) {
  return {
    allTrips: state.trips.allTrips
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

