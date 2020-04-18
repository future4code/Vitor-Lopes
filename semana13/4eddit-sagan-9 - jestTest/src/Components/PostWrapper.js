import React from 'react'
import styled from 'styled-components'
import Comment from '@material-ui/icons/Comment'
import { TextField, Button, Paper, Typography } from '@material-ui/core'

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const PaperWrapper = styled(Paper)`
  padding: 15px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  color: #4f4f50;
`

const CommentsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3vh;
    margin-top: 10px;
`
const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LikeAndCommentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
`
const TitleWrapper = styled.h3`
  color: #ff7828;
`


class PostWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContentWrapper>
      <PaperWrapper elevation={10}>
        <div onClick={this.props.seeDetails}>
            <TitleWrapper>{this.props.post.username}</TitleWrapper>
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.text}</p>
        </div>
        <LikeAndCommentWrapper>
          <ArrowWrapper>
            <div 
            onClick={this.props.votePlus}>
            {this.props.arrowUp}
            </div>
            {this.props.post.votesCount}
            <div 
            onClick={this.props.voteMinus}>
            {this.props.arrowDown}
            </div>
            {this.props.post.userVoteDirection}
          </ArrowWrapper>
          <CommentsWrapper>
            <Comment onClick={this.props.seeDetails} />
            {this.props.post.commentsNumber}
          </CommentsWrapper>
        </LikeAndCommentWrapper>
      </PaperWrapper>
    </ContentWrapper>
    )
  }
}



export default PostWrapper