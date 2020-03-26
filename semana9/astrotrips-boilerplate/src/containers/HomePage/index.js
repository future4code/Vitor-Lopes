import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'
import axios from 'axios'
import { getTrips } from '../../Actions/Trips'
import TripsCard from "../../Components/TripsCard";

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`


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
        <DisplayGrid>
          {this.props.allTrips.map(element => {
            return (
              <div key={element.id} >
                <TripsCard
                  name={element.name}
                  id={element.id}
                  description={element.description}
                  planet={element.planet}
                  durationInDays={element.durationInDays}
                  date={element.date}
                />
              </div>
            )
          })}
        </DisplayGrid>
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

