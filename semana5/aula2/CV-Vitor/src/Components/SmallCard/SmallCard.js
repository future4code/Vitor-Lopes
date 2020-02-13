import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className="small-card">
            <img src={props.imagem} />
            <span>{props.titulo}</span>
            <p>{props.texto}</p>

        </div>
    )
}

export default SmallCard