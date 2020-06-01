import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const GridConteiner = styled.div`
  width: 86vw;
  height: 71vh;
  background-color: #a29bfe;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 2vh 2vw;
`
const PlaylistBar = styled.div`
    height: 5vh;
    width: 90vw;
    background-color: #6c5aa1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'


export default class GridMusic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaPlaylist: undefined,
      getListOfPlaylist: undefined,
      name: '',
    }
  }

  componentDidMount() {
    this.carregaListaDePlaylist()
  }

  componentDidUpdate() {
  }

  carregaListaDePlaylist = () => {
    const getListOfPlaylist = axios.get(`${baseURL}/playlists/getAllPlaylists`, {
      headers: {
        'auth': 'Lopes'
      }
    })

    getListOfPlaylist.then((response) => {
      console.log(response.data)
      this.setState({ getListOfPlaylist: response.data })
    }).catch((error) => {
      console.log(error)
    })
  }


  lidaComMudancaNome = (event) => {
    const novoValor = event.target.value
    this.setState({ name: novoValor })
  }
  componentDidUpdate() {

  }

  lidaComSalvarPlaylist = () => {
    const novaPlaylist = {
      name: this.state.name,
    }

    const promessaDeNovoUsuario = axios.post(`${baseURL}/playlists/createPlaylist`, novaPlaylist, {
      headers: {
        'auth': 'Lopes'
      }
    })

    promessaDeNovoUsuario.then(response => {
      alert("Playlist criada com sucesso!")
      this.carregaListaDePlaylist()
      this.setState({name: ''})
    }).catch(error => {
      alert("Algo deu errado. Tente novamente.")
      console.log(error.response.data.message)
    })
  }





  render() {
    if (this.state.getListOfPlaylist === undefined) {
      return (<h1>Carregando...</h1>)
    }

    return (
      <div>
        <PlaylistBar>
          <div>
            <input
              placeholder='Digite o nome da playlist'
              type='text'
              onChange={this.lidaComMudancaNome}
              value={this.state.name}
            />
            <button onClick={this.lidaComSalvarPlaylist}>Criar Playlist</button>
          </div>
          <div>
            <select>
              {this.state.getListOfPlaylist.result.list.map((playlist) => (
                <option key={playlist.id}>
                  {playlist.name}
                </option>
              ))}
            </select>
            <button>Selecionar Playlist</button>

          </div>

        </PlaylistBar>
        <GridConteiner>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </GridConteiner>

      </div>
    )
  }
}


