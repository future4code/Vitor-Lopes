import React from 'react'
import './BigCard.css'
import styled from 'styled-components';


const Bigcard = styled.div`
`
const HeaderDiv = styled.div`
    width: 50vw;
    border: 2px solid black;
    display: flex;
`

const BigcardImg = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;    
`

const BigCardImagem = styled.img`
    height: 50px;
    width: 50px;
    padding: 0 10px;
    border-radius: 50%;
`

const PostFoto = styled.img`
    width:50vw;
    height: 50vw;
    max-width:50vw;
    max-height:70vw;
`

const FooterDiv = styled.div`
display:flex;
justify-content:space-between;
`

const BotaoCurtir = styled.img`
height:30px;
`

const BotaoComentar = styled.button`
margin-right: 10px;
`

// constructor(props) {
//     super(props);
    
//   }




function BigCard(props) {
    return (
        <Bigcard>
            <HeaderDiv>
                <BigcardImg>
                    <BigCardImagem src={props.imagem} />
                </BigcardImg>
                <div>
                    <h5>{props.titulo}</h5>
                </div>
            </HeaderDiv>
            <PostFoto src={props.imagemPost} />
            <FooterDiv>
                <BotaoCurtir src={props.botaoCurtir} />
                <BotaoComentar>Comentar</BotaoComentar>
            </FooterDiv>

        </Bigcard>
    )
}

export default BigCard