import React from 'react';
import logo from './logo.svg';
import './App.css';
import  BigCard from './Components/BigCard/BigCard'
import  SmallCard from './Components/SmallCard/SmallCard'



function App() {
  return (
    <div className="App">
      {/* <BigCard titulo='Vitor Soares Lopes' texto='Oi eu sou o Vitor' imagem='https://codinginfinite.com/wp-content/uploads/2019/05/maxresdefault-1.jpg' /> */}
    <SmallCard titulo='Email:' texto='emailaqui@email.com' imagem='https://codinginfinite.com/wp-content/uploads/2019/05/maxresdefault-1.jpg' />

    </div>
  );
}

export default App;
