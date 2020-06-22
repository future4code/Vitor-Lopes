const inicialState = {
  allTrips: []
}
export const trips = (state = inicialState, action) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return {
        ...state, 
        allTrips: action.payload.tripList
      }

    default:
      return state
  }
}