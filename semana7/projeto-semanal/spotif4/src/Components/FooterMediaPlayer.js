import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FooterPlayer = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: #6c5aa1;
`



export default class FooterMediaPlayer extends Component {
    render() {
        return (
            <FooterPlayer>
                FooterPlayer
            </FooterPlayer>
        )
    }
}
