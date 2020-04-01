import { combineReducers } from "redux";
import { connectRouter, ConnectedRouter } from "connected-react-router";
import {trips} from './Trips'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips
    // Outros reducers aqui
  })