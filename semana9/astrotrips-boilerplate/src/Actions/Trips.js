import axios from 'axios'
import { push } from "connected-react-router";


const user = 'lopes'
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`


const setTrips = (tripList) => {
    return {
        type: 'SET_TRIPS',
        payload: {tripList}
    }
}

export const getTrips = () => async (dispatch) => {
    try {
       const response =  await axios.get(`${baseUrl}/trips`)
       dispatch(setTrips(response.data.trips))
    } catch (error) {
        console.error("Falha no login", error)
    }
}
