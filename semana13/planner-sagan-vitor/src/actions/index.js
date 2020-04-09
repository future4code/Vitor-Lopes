import React from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planer-sagan-vitor'

export const getTasks = (tasks) => {
  return {
    type: 'GET_TASKS',
    payload: {
      tasks
    }
  }
}

export const getTasksList = () => async (dispatch) => {
  try {
    const result = await axios.get(baseUrl,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // console.log(result.data)
    dispatch(getTasks(result.data))
  } catch (error) {
    console.log(error)
  }
}

export const createTask = (taskContent) => async (dispatch) => {
  try {
    const result = await axios.post(baseUrl, taskContent,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(result.data)
    console.log(taskContent)
    dispatch(getTasksList())
  } catch (error) {
    console.log(error)
    console.log(taskContent)
  }
}