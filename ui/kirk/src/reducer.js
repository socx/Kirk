
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './Home/store/reducer'
import layouts from './Layouts/store/reducer'
import login from './Login/store/reducer'

export default combineReducers({
    routing : routerReducer,
    layouts : layouts,
    login: login,
    home : home
})