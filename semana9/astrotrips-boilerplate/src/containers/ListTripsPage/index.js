import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'
import { getTrips } from '../../Actions/Trips'
import AdmBar from '../../Components/AdminBar'
import TripsList from '../../Components/TripsList'
import styled from 'styled-components'

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`
const Title = styled.h1`
display: flex;
  justify-content: center;
`

class ListTripsPage extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToLogin()
    }
  }
  componentWillMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
        <Header />
        <AdmBar />
        <Title>Lista de Viagens</Title>
        <DisplayGrid>
          {this.props.allTrips.map(element => {
            return (
              <div key={element.id} >
                <TripsList
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

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  fetchTrips: () => dispatch(getTrips())
})

function mapStateToProps(state) {
  return {
    allTrips: state.trips.allTrips
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);
