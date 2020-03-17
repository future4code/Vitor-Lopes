import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CreatePlaylist = styled.div`
  width: 86vw;
  height: 76vh;
  background-color: #a29bfe;
  display: flex;
  padding: 2vh 2vw;
`




export default class FooterMediaPlayer extends Component {

  render() {
    return (
      <CreatePlaylist>
        ShowPlaylists
      </CreatePlaylist>
    )
  }
}
