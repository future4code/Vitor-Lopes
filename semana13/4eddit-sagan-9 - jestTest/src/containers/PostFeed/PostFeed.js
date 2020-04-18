import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from 'react-redux'
import { getPostList, getPostDetails, voteForPostFromFeed, createPost } from '../../Actions/'
import { routes } from '../Router/index'
import { push } from 'connected-react-router'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import PostWrapper from '../../Components/PostWrapper'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Paper, Typography, Button, TextField } from '@material-ui/core'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`
const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e5e9ed;
  min-height: 90vh;
`
const PaperWrapper = styled(Paper)`
  margin: 20px;
  padding: 15px;
  width: 40%;
`
const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  width: 40%;
  border: 1px #ff7828 dotted;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 10px 10px 40px;
  color: #4f4f50;
`

class PostFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
      arrows:{
        up: '',
        down: ''
      }
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToLogin()
    }
    this.props.getPosts()
  }

  goToPostDetails = (postId) => {
    this.props.goToPostInfo(postId)
  }

  setLogout = () => {
    this.props.goToLogin()
    localStorage.clear()
  }

  sendPostContent = (e) => {
    e.preventDefault();
    this.props.sendPostContent(this.state.post)
    this.setState({
      post: {}
    })
  }

  saveContent = (e) => {
    this.setState({
      post: {...this.state.post, [e.target.name]: e.target.value} 
    })
  }

  voteUser = (vote, postId, voteDirection) => {
    if (vote === 'vote +1') {
        if(voteDirection === 1){
          vote = 0
          this.setState({
            arrows: {up: '', down: ''}
          })
        }
        else if(voteDirection === 0 || voteDirection === -1){
          vote = 1
          this.setState({
            arrows: {up: postId, down: ''}
          })
        }
      this.props.voteUserDirection(vote, postId)
    } 
    else {
        if(voteDirection === -1){
          vote = 0
          this.setState({
            arrows: {up: '', down: ''}
          })
        }
        else if(voteDirection === 0 || voteDirection === 1){
          vote = -1
          this.setState({
            arrows: {up: '', down: postId}
          })
        }
        this.props.voteUserDirection(vote, postId)
    }
  }

  render() {
     
    return (
      <PageWrapper>
        <Header
        logOutButton={<IconButton
        onClick={this.setLogout}
        color="inherit"
        >
        <div>
          <AccountCircle />
          <LabelButton>Logout</LabelButton>
        </div>
        </IconButton>} />
        <ContentWrapper>
          <PaperWrapper elevation={10}>
            <FormWrapper onSubmit={this.sendPostContent}>
            <Typography 
                gutterBottom variant="h5" 
                align='justify'
                >
                  Compartilhe algo com o mundo!
                </Typography>
                <TextField
                  label="Título do post"
                  style={{ margin: 12 }}
                  onChange={this.saveContent}
                  name='title'
                  type='text'
                  required
                  value = {this.state.post.title || ''}
                />
                <TextField
                  label="conteúdo do post"
                  style={{ margin: 12 }}
                  onChange={this.saveContent}
                  name='text'
                  type='text'
                  required
                  multiline={true}
                  rows={4}
                  variant='outlined'
                  value = {this.state.post.text || ''}
                />
                <div>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  type={onsubmit}
                  >
                    Postar
                  </Button>
                </div>
            </FormWrapper>
          </PaperWrapper>
          {this.props.getMyPosts.map(element => {
            let arrowUp = this.state.arrows.up === element.id ? 
            <ArrowDropUpIcon color='primary'/> : <ArrowDropUpIcon/>
            let arrowDown = this.state.arrows.down === element.id ? 
            <ArrowDropDownIcon color='primary'/> : <ArrowDropDownIcon/>
            return (
              <PostCard key={element.id} >
                <PostWrapper
                arrowUp= {arrowUp}
                arrowDown= {arrowDown}
                seeDetails={() => this.goToPostDetails(element.id)} post={element}
                votePlus={() => this.voteUser('vote +1', element.id, element.userVoteDirection)}
                voteMinus={() => this.voteUser('vote -1', element.id, element.userVoteDirection)}
                />
              </PostCard>
            )
          })}
        </ContentWrapper>
      </PageWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPostList()),
    goToPostInfo: (postId) => dispatch(getPostDetails(postId)),
    sendPostContent: (postContent) => dispatch(createPost(postContent)),
    goToLogin: () => dispatch(push(routes.root)),
    voteUserDirection: (vote, postId) => dispatch(voteForPostFromFeed(vote, postId))
  };
}

function mapStateToProps(state) {
  return {
    getMyPosts: state.posts.postList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)