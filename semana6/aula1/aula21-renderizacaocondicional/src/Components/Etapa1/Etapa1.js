import React, { Component } from 'react';


class Etapa1 extends Component {
    
    render() {
        return (
            <div>

                <h3>ETAPA1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu email?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino Superior incompleto</option>
                    <option>Ensino Superior completo</option>
                </select>
                <br />

            </div>
        )
    }
}

Etapa1.propTypes = {

}

export default Etapa1;