const initialState = {
  tasksList: [],
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state, tasksList: action.payload.tasks
      }

    default:
      return state
  }
}

export default tasks
