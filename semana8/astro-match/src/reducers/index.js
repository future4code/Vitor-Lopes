import { combineReducers } from 'redux'
import routes from './routes';
import profiles from './profiles'

const rootReducer = combineReducers({
  routes, // equivalente a routes: routes
  profiles, // equivalente a profiles: profiles
})

export default rootReducer;
