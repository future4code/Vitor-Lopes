import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import {routes} from '../../containers/Router/index'
import AdmBar from '../../Components/AdminBar'

class ListTripsPage extends React.Component {
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
        <AdmBar />
        ListTripsPage
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps) (ListTripsPage);
