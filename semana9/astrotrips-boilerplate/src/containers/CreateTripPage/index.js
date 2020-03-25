import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import {routes} from '../../containers/Router/index'
import { TextField, Select } from '@material-ui/core'
import PlanetSelector from '../../Components/PlanetSelector'
import AdminBar from '../../Components/AdminBar'


const FormConteiner = styled.div`
  width: 100%;
  height: 80vh;
  gap: 10px;
  display: grid;
  place-content: center;
  justify-items: center;
  grid-template-columns: 30% 30%;
`

class CreateTripPage extends Component {
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
        CreateTripPage
        <FormConteiner>
          <TextField
            label="Nome da viagem"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 5 caracteres"
          />
          <PlanetSelector />
          <TextField
            label="Descrição"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 30 letras"
          />
          <TextField
            label="Duração(em dias)"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 50 dias"
          />
        </FormConteiner>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps) (CreateTripPage);

