import * as constants from './constants';

const initialState = {
    errorMessage : '',
    message : '',
    isAuthenticating : false,
    isAuthenticated :false
}

export default (state = initialState, action) => {
    switch(action.type){
        case constants.AUTHENTICATE:
            return {
                ...state,
                isAuthenticating : true
            }
        case constants.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isAuthenticating : false,
                isAuthenticated : true
            }
        case constants.AUTHENTICATION_FAILED:
            return {
                ...state,
                isAuthenticating : false,
                isAuthenticated : false
            }
        default:
            return state 
    }
}