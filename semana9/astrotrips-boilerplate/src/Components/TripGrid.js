import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import TripsCards from '../Components/TripsCard'

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`


export default class TripGrid extends Component {

  render() {
    return (
      <MainGrid>

      </MainGrid>
    )
  }
}


