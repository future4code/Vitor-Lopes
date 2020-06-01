import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from "./Components/Etapa1/Etapa1";
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';
import EtapaFinal from './Components/EtapaFinal/EtapaFinal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    }
  }


  avancaDeEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <EtapaFinal />;
      // case 5:
      //   return <Etapa1 />;
      default:
        return <EtapaFinal />;
    }
  }


  etapaSeguinte = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    return (
      <div className="App">
        {this.avancaDeEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.etapaSeguinte}>Próximo</button>
        )}
      </div>
    )
  }
}


export default App;
