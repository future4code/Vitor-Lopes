import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index'
import { Tab, Tabs, Paper } from '@material-ui/core'

function mapDispatchToProps(dispatch) {
  return {
    goToTripsCreate: () => dispatch(push(routes.tripsCreate)),
    goToTripsList: () => dispatch(push(routes.tripsList)),
    goToTripsDetail: () => dispatch(push(routes.tripsDetails)),
  };
}

class AdminBar extends Component {
  render() {
    return (
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick={this.props.goToTripsCreate} label="Criar Nova Viagem" />
          <Tab onClick={this.props.goToTripsList} label="Lista de Viagens" />
          <Tab onClick={this.props.goToTripsDetail} label="Detalhes da Viagem" />
        </Tabs>
      </Paper>
    )
  }
}

export default connect(null, mapDispatchToProps)(AdminBar)
