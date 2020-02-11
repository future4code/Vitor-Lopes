import React from 'react'
import './PageSection.css'
import BigCard from '../BigCard/BigCard'
import SmallCard from '../SmallCard/SmallCard'
import ImageButton from '../ImageButton/ImageButton'

function PageSection(props) {
    return (
        <div className="page-section">
            <h2>{ props.titulo }</h2>
            { props.children }
        </div>
    )
}

export default PageSection