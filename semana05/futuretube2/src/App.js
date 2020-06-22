import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1 id="logo">FutureTube</h1>
        <input type="search" placeholder="Busca" id="busca" />
      </header>

      <main className="master-container">
        <nav id="menu-esq">
          <a href="index.html"><button>Início</button></a>
          <a href=""><button>Em Alta</button></a>
          <a href=""><button>Inscrições</button></a>
          <a href=""><button>Originais</button></a>
          <a href="" className="topBorder"><button>Biblioteca</button></a>
          <a href=""><button>Histórico</button></a>
        </nav>
        <div id="main-container">
          <a href="player.html">
            <video src="http://soter.ninja/videos/1.mp4"></video>
            <div>teste1</div>
          </a>
          <a href="player2.html">
            <video src="http://soter.ninja/videos/2.mp4"></video>
            <div>teste2</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/3.mp4">testando</video>
            <div>teste3</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/4.mp4">testando</video>
            <div>teste4</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/5.mp4">testando</video>
            <div>teste5</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/6.mp4">testando</video>
            <div>teste6</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/7.mp4">testando</video>
            <div>teste7</div>
          </a>
          <a href="">
            <video src="http://soter.ninja/videos/8.mp4">testando</video>
            <div>teste8</div>
          </a>
        </div>

      </main>

      <footer>Oi, eu moro no footer!</footer>
    </div>
  );
}

export default App;
