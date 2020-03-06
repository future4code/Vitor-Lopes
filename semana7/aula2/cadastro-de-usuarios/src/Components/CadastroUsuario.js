import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ConteinerComponent = styled.div`
    border: 1px solid black;
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const Paragraph = styled.p`
  display: flex;
  align-self: left;
`
const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: ''
    }
  }

  lidaComMudancaNome = (event) => {
    const novoValor = event.target.value
    this.setState({ name: novoValor })
  }
  lidaComMudancaEmail = (event) => {
    const novoValor = event.target.value
    this.setState({ email: novoValor })
  }

  lidaComSalvarUsuario = () => {
    const novoUsuario = {
      name: this.state.name,
      email: this.state.email
    }

    const promessaDeNovoUsuario = axios.post(`${baseURL}/users/createUser`, novoUsuario, {
      headers: {
        'api-token': 'Lopes'
      }
    })

    promessaDeNovoUsuario.then(response => {
      alert("Usuario criado com sucesso!")
    }).catch(error => {
      alert("Algo deu errado. Tente novamente.")
      console.log(error.response.data.message)
    })
  }


  render() {
    return (
      <ConteinerComponent>
        <Paragraph>Nome:</Paragraph>
        <input
          type='text'
          placeholder='Digite seu nome'
          onChange={this.lidaComMudancaNome}
          value={this.state.name}
        />

        <Paragraph>Email:</Paragraph>
        <input
          type='email'
          placeholder='Digite seu email'
          onChange={this.lidaComMudancaEmail}
          value={this.state.email}
        />

        <button onClick={this.lidaComSalvarUsuario}>Salvar</button>
      </ConteinerComponent>
    )
  }
}
