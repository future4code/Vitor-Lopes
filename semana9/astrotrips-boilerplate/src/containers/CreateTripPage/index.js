import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Header from '../../Components/Header'
import { routes } from '../../containers/Router/index'
import { TextField, Button } from '@material-ui/core'
import PlanetSelector from '../../Components/PlanetSelector'
import AdminBar from '../../Components/AdminBar'
import {createTrips} from '../../Actions/Trips'

const FormConteiner = styled.form`
  width: 100%;
  height: 80vh;
  gap: 10px;
  display: grid;
  place-content: center;
  justify-items: center;
  grid-template-columns: 30% 30%;
`

const tripForm = [
  { name: 'name', label: 'Nome da Viagem', type: 'text', required: true, pattern: '[a-zA-Zãé ]{5,}' },
  { name: 'date', label: 'Data da viagem', type: 'text', required: true, pattern: '[a-zA-Zãé ]{3,}' },
  { name: 'description', label: 'Descrição', type: 'text', required: true, pattern: '[a-zA-Zãé ]{3,}' },
  { name: 'durationInDays', label: 'Duração(em dias)', type: 'text', required: true, pattern: '[a-zA-Zãé ]{3,}' },
]

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }  componentDidMount() {
    const token = window.localStorage.getItem('token')

    if (token === null) {
      this.props.goToLogin()
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postTrip(this.state.form)
    this.props.goToHome()
  }

  render() {
    return (
      <div>
        <Header />
        <AdminBar />
        CreateTripPage
        <FormConteiner>
          <TextField
            name='name'
            value={this.state.value}
            onChange={this.handleInputChange}
            label="Nome da viagem"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 5 caracteres"
            inputProps={{ pattern: '[a-zA-Zãé ]{5,}' }}
          />
          <PlanetSelector name='planet' handleInputChange={this.handleInputChange} />
          <TextField
            name='date'
            value={this.state.value}
            onChange={this.handleInputChange}
            label="Data"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="exemplo de data válida: 21/12/21"
          />
          <TextField
            name='description'
            value={this.state.value}
            onChange={this.handleInputChange}
            label="Descrição"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 30 letras"
          />
          <TextField
            name='durationInDays'
            value={this.state.value}
            onChange={this.handleInputChange}
            label="Duração(em dias)"
            id="margin-none"
            fullWidth
            defaultValue=""
            helperText="Mínimo 50 dias"
          />
          <div />
          <Button onClick={this.handleSubmit} variant="text" color="primary" disableElevation>Enviar</Button>
        </FormConteiner>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  postTrip: (form) => dispatch(createTrips(form)),
  goToHome: () => dispatch(push(routes.root)),
})

export default connect(null, mapDispatchToProps)(CreateTripPage);

