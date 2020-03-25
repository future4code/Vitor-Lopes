import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { TextField, Select } from '@material-ui/core'
import PlanetSelector from '../../Components/PlanetSelector'

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



  render() {
    return (
      <div>
        <Header />
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

export default CreateTripPage;
