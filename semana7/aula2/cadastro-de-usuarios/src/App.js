import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components'
import CadastroUsuario from './Components/CadastroUsuario'
import ListaUsuarios from './Components/ListaUsuarios'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'cadastro',
    }
  }

  trocaDePagina = () => { //método para trocar de página
    if (this.state.telaAtual === 'cadastro') {
      this.setState({ telaAtual: 'lista' })
    } else {
      this.setState({ telaAtual: 'cadastro' })
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.trocaDePagina}>{`Ir para página de ${this.state.telaAtual === 'lista' ? 'cadastro' : 'lista'}`}</button>
        </div>
        <div>
          {this.state.telaAtual === 'cadastro' ? (<CadastroUsuario />) : (<ListaUsuarios />)}
          {/* <CadastroUsuario />
          <ListaUsuarios /> */}
        </div>
      </div>
    )
  }
}