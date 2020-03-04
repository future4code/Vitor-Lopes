import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ConteinerComponent = styled.div`
    border: 1px solid black;
    height: 200px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
// const DataUsuarios = styled.div`

// `
const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"





export default class ListaUsuarios extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
      errorMessage: undefined,
      arrayUsuariosCadastrados: [],
    }
  }
  componentDidMount() {
    this.DataUsuarios()
  }


  DataUsuarios = () => {
    const arrayUsuariosCadastrados = axios.get(`${baseURL}/users/getAllUsers`, {
      headers: {
        'api-token': 'Lopes'
      }
    })

    arrayUsuariosCadastrados.then((response) => {
      console.log(response.data)
      this.setState({ arrayUsuariosCadastrados: response.data.result.list })
      console.log(arrayUsuariosCadastrados)

    }).catch((error) => {
      console.log('error')
    })

  }


  render() {
    return (
      <ConteinerComponent>
        <h1>Usuários Cadastrados:</h1>
        <ul>
          {this.state.arrayUsuariosCadastrados.length === 0 && <p>Carregando...</p>}
          {this.state.arrayUsuariosCadastrados.map((user) => (
            <li key={user.id}>
              {user.name}
              <button>teste</button>
            </li>
          ))}

        </ul>

      </ConteinerComponent>
    )
  }
}
