// export count from './count'
// export reports from '../components/Reports/store/reducer'

import count from './count'
import reports from '../components/Reports/store/reducer'

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const initialState = {
    count: count.initialState,
    reports: reports.initialState,
    routing: {}
};
const reducers = combineReducers({
    count: count,
    reports: reports,
    routing: routerReducer
})

export default function(state, action) {
    
    return (action.type === 'RESET_STATE') ? initialState : reducers(state, action);
}

