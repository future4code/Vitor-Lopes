import React from 'react'
import './ImageButton.css'

function ImageButton(props) {
    return (
        <div className="image-button">
            <img src={props.imagem} />
            <p>{props.texto}</p>
        </div>
    )
}

export default ImageButton