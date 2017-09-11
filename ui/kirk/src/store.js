
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducer'

export const history  = createHistory();

const middleware = [thunk, routerMiddleware(history)]
const enhancers = [];
const initialState = {};

if(process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    if(typeof devToolsExtension === 'function')
        enhancers.push(devToolsExtension())
}
const composeEnhancers = compose(applyMiddleware(...middleware) , ...enhancers)
const store = createStore(reducers, initialState, composeEnhancers )

export default store;