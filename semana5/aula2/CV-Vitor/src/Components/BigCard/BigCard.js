import React from 'react'
import './BigCard.css'

function BigCard(props) {
    return (
        <div className="big-card">
            <div className='div-imagem'>
                <img src={props.imagem} />
            </div>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default BigCard