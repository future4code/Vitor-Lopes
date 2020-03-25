import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import {routes} from '../../containers/Router/index'
import AdminBar from '../../Components/AdminBar'

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')

    if(token === null) {
      this.props.goToLogin()
    }
  }


  render() {
    return (
      <div>
        <Header />
        <AdminBar />
        TripDetailsPage
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps) (TripDetailsPage);

