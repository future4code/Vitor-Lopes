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

const ListaDeUsuarios = styled.ul`
    padding: 0;
    margin: 0;
`

const UsuariosListaOrdenada = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 0;
    margin: 0;
`

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
    this.mostraListaDeUsuarios()
  }

  mostraListaDeUsuarios = () => {
    const arrayUsuariosCadastrados = axios.get(`${baseURL}/users/getAllUsers`, {
      headers: {
        'api-token': 'Lopes'
      }
    })

    arrayUsuariosCadastrados.then((response) => {
      console.log(response.data)
      this.setState({ arrayUsuariosCadastrados: response.data.result })
    }).catch((error) => {
      console.log('error')
      this.setState({ arrayUsuariosCadastrados: [] })
    })
  }

  apagarUsuario = (idDoUsuario) => {
    const promessaApagarUsuario = axios.delete(`${baseURL}/users/deleteUser?id=${idDoUsuario}`, {
      headers: {
        'api-token': 'Lopes',
      }
    })

    promessaApagarUsuario.then((response) => {
      alert("usuario apagado com sucesso")
      this.mostraListaDeUsuarios()
    }).catch((error) => {
      alert("erro ao apagar usuário")
      console.log(error.response.data.message)
    })
  }


  render() {
    return (
      <ConteinerComponent>
        <h1>Usuários Cadastrados:</h1>
        <ListaDeUsuarios>
          {this.state.arrayUsuariosCadastrados.length === 0 && <p>- Não há usuários cadastrados -</p>}
          {this.state.arrayUsuariosCadastrados.map((user) => (
            <UsuariosListaOrdenada key={user.id}>
              {user.name}
              <span onClick={() => this.apagarUsuario(user.id)}>X</span>
            </UsuariosListaOrdenada>
          ))}

        </ListaDeUsuarios>

      </ConteinerComponent>
    )
  }
}
