import React, { Component } from 'react';

class Etapa3 extends Component {

    render() {
        return (
            <div>

                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso técnico</option>
                    <option>Cursos de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
                <br />

            </div>
        );
    }
}

Etapa3.propTypes = {

};

export default Etapa3;