import React, { Component } from 'react'

const mockDeCadastro = {
    nome:'golias',
    email:'golias@gmail.com'
}

const TelaCadastroDeUsuarios = (props) => {
    return(
        <div>Oi eu estou em construção</div>
    )
}


export default class TelaCadastroDeUsuarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
        }
    }






    render() {
        return (
            <div>
                <input 
                placeholder='Nome'
                type=''
                
                />

                <input 
                placeholder='Email'
                type=''
                
                />


            </div>
        )
    }
}
