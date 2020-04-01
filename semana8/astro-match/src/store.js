import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

export default store;
