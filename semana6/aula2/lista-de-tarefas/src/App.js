import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Principal = styled.div`
`
const RecebeLi = styled.ul`
`
const Linguagens = styled.li`
  text-decoration: ${({ concluida }) => (concluida ? "line-through" : "none")};
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linguagens: [],
      inputValue: "",
      filter: ""
    }
  }


  componentDidMount() {
    try {
      const linguagensStrin = localStorage.getItem("linguagens")
      if (linguagensStrin) {
        const linguagens = JSON.parse(linguagensStrin)
        this.setState({ linguagens })
      }
    } catch (event) { }
  }

  criarLinguagem = () => {
    if (this.state.inputValue) {

      const novaLinguagem = {
        id: Date.now(),
        texto: this.state.inputValue,
        concluida: false
      }

      this.setState({
        linguagens: [...this.state.linguagens, novaLinguagem],
        inputValue: ""
      })
    }
  }

  onChangeInput = event => {
    this.setState({ inputValue: event.target.value })
  }
  onChangeFilter = event => {
    this.setState({ filter: event.target.value })
  }

  seletorLinguagem = id => {
    const newLinguagens = this.state.linguagens.map(listaDeLinguagem => {
      if (listaDeLinguagem.id === id) {
        return {
          ...listaDeLinguagem,
          concluida: !listaDeLinguagem.concluida
        }
      }
      return listaDeLinguagem;
    })

    this.setState({ linguagens: newLinguagens })
  }

  componentDidUpdate() {
    try {
      localStorage.setItem("linguagens", JSON.stringify(this.state.linguagens))
    } catch (event) { }
  }



  render() {
    return (
      <Principal className="App">
        <h1>Lista de linguagens aprendidas</h1>
        <input value={this.state.inputValue} onChange={this.onChangeInput} />
        <button onClick={this.criarLinguagem}>Adicionar</button>
        <br />
        <br />
        <span>Filtro</span>
        <select value={this.state.filter} onChange={this.onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="concluidas">Concluídas</option>
        </select>

        <RecebeLi>
          {this.state.linguagens
            .filter(listaDeLinguagem => {
              switch (this.state.filter) {
                case "pendentes":
                  return !listaDeLinguagem.concluida
                case "concluidas":
                  return listaDeLinguagem.concluida
                default: 
                return true
              }
            })

            .map(listaDeLinguagem => {
              return (
                <Linguagens onClick={() => this.seletorLinguagem(listaDeLinguagem.id)}
                  concluida={listaDeLinguagem.concluida}>
                  {listaDeLinguagem.texto}
                </Linguagens>
              );
            })}
        </RecebeLi>
      </Principal>
    )
  }
}

export default App;
