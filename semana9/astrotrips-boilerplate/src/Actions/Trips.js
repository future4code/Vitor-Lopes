import axios from 'axios'

const user = 'lopes'
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`
const token = window.localStorage.getItem("token")

const setTrips = (tripList) => {
  return {
    type: 'SET_TRIPS',
    payload: { tripList }
  }
}

export const getTrips = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/trips`)
    dispatch(setTrips(response.data.trips))
  } catch (error) {
    console.error("Falha no login", error)
  }
}

export const createTrips = (form) => async (dispatch) => {
  console.log(form)
  try {
    const result = await axios.post(`${baseUrl}/trips`,
      form,
      {
        headers: {
          auth: token
        }
      },
    )
    dispatch(getTrips())
  } catch (error) {
    console.error("Falha no login", error)
  }
}
