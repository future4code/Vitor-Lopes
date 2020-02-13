import React from 'react'
import './PageSection.css'
import BigCard from '../BigCard/BigCard'
import SmallCard from '../SmallCard/SmallCard'
import ImageButton from '../ImageButton/ImageButton'
import styled from 'styled-components';


const PostConteiner = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`
const HeaderPostagem = styled.div`
`
// const PostFoto = styled.img`
//     max-width:50vw;
//     max-height:40vw;

// `



function PageSection(props) {
    return (
        <PostConteiner>
            <HeaderPostagem>
                {props.children}
                <h2>{props.titulo}</h2>
            </HeaderPostagem>
        </PostConteiner>
    )
}

export default PageSection