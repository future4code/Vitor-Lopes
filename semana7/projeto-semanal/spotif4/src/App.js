import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
// import SidebarMenu from './Components/Sidebar'
import div from './Components/GridMusic'
import FooterMediaPlayer from "./Components/FooterMediaPlayer"
import CreatePlaylist from './Components/CreatePlaylist'
import GridMusic from './Components/GridMusic';



const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`
const Header = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: #6c5ce7;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: row;
`

//----------------------------------
const SidebarMenu = styled.div`
  width: 10vw; 
  height: 80vh;
  background-color: #6c5ce7;
  display: flex;
  flex-direction: column;
`
const ButtomDiv = styled.button`
    margin-top: 30px;
    padding: 10px 0;
    text-align: center;
    background-color:  #6c5ce7;
    border: none;


`





export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'GridMusic',
    }
  }

  trocaDePagina = () => { //método para trocar de página
    if (this.state.telaAtual === 'GridMusic') {
      this.setState({ telaAtual: 'CreatePlaylist' })
    } else {
      this.setState({ telaAtual: 'GridMusic' })
    }
  }





  render() {
    return (
      <MainPageWrapper>
        <Header></Header>
        <FlexColumn>
          <SidebarMenu>

            <ButtomDiv>Início</ButtomDiv>
            <ButtomDiv>Buscar</ButtomDiv>
            <ButtomDiv onClick={this.trocaDePagina}>Criar Playlist</ButtomDiv>

          </SidebarMenu>
          <div>
            {this.state.telaAtual === 'GridMusic' ? (<GridMusic />) : (<CreatePlaylist />)}
          </div>

        </FlexColumn>
        <FooterMediaPlayer></FooterMediaPlayer>
      </MainPageWrapper>
    )
  }
}
