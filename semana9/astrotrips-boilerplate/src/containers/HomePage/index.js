import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'
import axios from 'axios'
import TripGrid from '../../Components/TripGrid'

const user = 'lopes'
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.catchTripsList()
  }


  catchTripsList = () => {
    const response = axios.get(`${baseUrl}/trips`)
    response.then((response) => {
      const tripsList = response.data.trips
      console.log(tripsList)
  
  
      // const arraytemp = response.data.products
      // arraytemp.forEach((item, index, array) => {
      //   item.carrinho = 0
      //   item.image = (`https://i.picsum.photos/id/1/${this.gna()}${this.gna()}${this.gna()}/${this.gna()}${this.gna()}${this.gna()}.jpg`)
      // })
      // this.setState({ products: arraytemp })
  
    }).catch((error) => {
      console.log(error.message)
    })
  }
  

  render() {
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
  };
}

export default connect(null, mapDispatchToProps)(HomePage);

