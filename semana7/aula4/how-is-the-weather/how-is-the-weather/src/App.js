import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import ClimaWrapper from './Components/ClimaWrapper'

const PageWrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`




export default class App extends Component {
  render() {
    return (
      <PageWrapper>
        <ClimaWrapper />
      </PageWrapper>
    )
  }
}

