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

export default class ListaUsuarios extends Component {
    render() {
        return (
            <ConteinerComponent>
                <h1>Usuários Cadastrados:</h1>
            </ConteinerComponent>
        )
    }
}
