const initialState = {
  profile: null,
  matches: []
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { profile: action.payload.profile }
    case 'SET_MATCHES':
      return {
        ...state,
        matches: action.payload.matches
      }
    default:
      return state
  }
}

export default profiles