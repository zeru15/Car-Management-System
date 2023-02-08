import { combineReducers } from 'redux';
import carReducer from './carReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    car: carReducer,
    auth: authReducer,
    error: errorReducer
})