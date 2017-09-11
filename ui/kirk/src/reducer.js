
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './home/store/reducer'

export default combineReducers({
    routing : routerReducer,
    home : home
})