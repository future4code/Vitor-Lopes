import React from 'react'
import axios from 'axios'
import { routes } from '../containers/Router/index';
import { push } from "connected-react-router";

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const showPosts = (posts) => {
  return {
    type: 'GET_ POSTS',
    payload: {
      posts
    }
  }
}

export const sendID = (postInfo) => {
  return {
    type: 'SEND_ID',
    payload: {
      postInfo
    }
  }
}

export const newUser = (userData) => async (dispatch) => {
  try {
    const result = await axios.post(`${baseUrl}/signup`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(result.data)
    dispatch(push(routes.postFeed))
  } catch (error) {
    console.log(error)
  }
}

export const setLogin = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post(`${baseUrl}/login`,
      userInfo,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(result.data)
    const token = result.data.token
    window.localStorage.setItem("token", token)
    dispatch(push(routes.postFeed))
  } catch (error) {
    console.log(error)
    alert('Senha ou e-mail incorretos. Favor tentar novamente')
  }
}

export const getPostList = () => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  try {
    const result = await axios.get(`${baseUrl}/posts`,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )
    console.log(result.data.posts)
    dispatch(showPosts(result.data.posts))
  } catch (error) {
    console.log(error)
  }
}

export const getPostDetails = (postId) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  try {
    const result = await axios.get(`${baseUrl}/posts/${postId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )
    console.log(result.data)
    dispatch(sendID(result.data))
    dispatch(push(routes.postDetails))
  } catch (error) {
    console.log(error)
  }
}

export const createComment = (comment, postId) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const myText = { text: comment }
  try {
    const result = await axios.post(`${baseUrl}/posts/${postId}/comment`,
      myText,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )

    console.log(result.data)
    dispatch(getPostDetails(postId))
  } catch (error) {
    console.log(error)
  }
}

export const voteForPostFromFeed = (add, postId) => async (dispatch) => {
  console.log(add, postId)
  const token = window.localStorage.getItem('token')
  const voteDirection = { direction: add }
  try {
    const result = await axios.put(`${baseUrl}/posts/${postId}/vote`,
      voteDirection,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )

    console.log(result.data)
    dispatch(getPostList())
  } catch (error) {
    console.log(error)
  }
}

export const voteForPostFromDetails = (add, postId) => async (dispatch) => {
  console.log(add, postId)
  const token = window.localStorage.getItem('token')
  const voteDirection = { direction: add }
  try {
    const result = await axios.put(`${baseUrl}/posts/${postId}/vote`,
      voteDirection,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )

    console.log(result.data)
 dispatch(getPostDetails(postId))
  } catch (error) {
    console.log(error)
  }
}

export const voteForComment = (vote, postId, commentId) => async (dispatch) => {
  console.log(vote, postId, commentId)
  const token = window.localStorage.getItem('token')
  const voteDirection = { direction: vote }
  try {
    const result = await axios.put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`,
      voteDirection,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }
    )

    console.log(result.data)
    dispatch(getPostDetails(postId))
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (postContent) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  try{
    const result = axios.post(`${baseUrl}/posts`, postContent,
    {headers: {
      'Content-Type': 'application/json',
      auth: token
    }}
    )
    console.log(result.data)
    dispatch(getPostList())
  }
  catch(error){
    alert('Falha na requisição, favor tentar novamente mais tarde')
    console.log(error)
  }
}