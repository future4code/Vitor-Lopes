import React from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planer-sagan-vitor'

export const showTasks = (tasks) => {
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
    dispatch(showTasks(result.data))
  } catch (error) {
    console.log(error)
  }
}

// export const createTask = (taskText, taskDay) => async () => {
//   const dataTasks = {
//     text: taskText,
//     day: taskDay
//   }
//   try {
//     const result = await axios.post(baseUrl,
//       dataTasks,
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     console.log(result.data)
//   } catch (error) {
//     console.log(error)
//   }
// }