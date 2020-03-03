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

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: ''
    }
  }

  render() {
    return (
      <ConteinerComponent>
        <Paragraph>Nome:</Paragraph>
        <input type='text' />
        <Paragraph>Email:</Paragraph>
        <input type='email' />
        <button>Salvar</button>
      </ConteinerComponent>
    )
  }
}
