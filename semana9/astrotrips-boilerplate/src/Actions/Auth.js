import axios from 'axios'
import { push } from "connected-react-router";


const user = 'lopes'
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`

export const login = (email, password) => async (dispatch) => {

    const loginData = {
        email,
        password
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, loginData)

        const token = response.data.token

        window.localStorage.setItem("token", token)

        dispatch(push('/trips/list'))

    } catch (error) {
        console.error("Falha no login", error)
    }
}