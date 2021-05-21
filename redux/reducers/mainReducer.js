import { combineReducers } from 'redux'
import citiesReducer from './citiesReducers'
import itinerariesReducer from './itinerariesReducer';
import authReducer from './authReducer'

const mainReducer = combineReducers({
    authReducer,
    itinerariesReducer,
    citiesReducer
})

export default mainReducer
