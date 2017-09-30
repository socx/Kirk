import * as constants from './constants';

const initialState = {
    errorMessage : '',
    message : '',
    isAuthenticating : false,
    isAuthenticated :false,
    isProcessing : false,
    userDetails : {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case constants.LOGON:
            return { ...state, isProcessing : true }
        case constants.LOGON_SUCCESS:
            return {
                ...state,
                isProcessing : false,
                isAuthenticated : true,
            }
        case constants.LOGON_FAILED:
            return {
                ...state,
                isProcessing : false,
                isAuthenticated : false,
                errorMessage : constants.ERROR_MESSAGE_FAILED_LOGON
            }
        case constants.LOG_OUT:
            return {
                ...state,
                isAuthenticated : false
            }
        case constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL:
            return { 
                ...state, 
                isProcessing : true,
                message : '',
                errorMessage : ''
            }
        case constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL_SUCCESS:
            return {
                ...state,
                isProcessing : false,
                message : constants.SUBMITTED_FORGOTTEN_PASSWORD_EMAIL_SUCCESS_MESSAGE,
                errorMessage : ''
            }
        case constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL_FAILED:
            return {
                ...state,
                isProcessing : false,
                message : '',
                errorMessage : constants.SUBMITTED_FORGOTTEN_PASSWORD_EMAIL_ERROR_MESSAGE
            }
        case constants.GET_TOKEN_USER_DETAILS:
            return {
                ...state,
                isProcessing : true
            }
        case constants.GET_TOKEN_USER_DETAILS_SUCCESS:
            return {
                ...state,
                isProcessing : false
            }
        case constants.GET_TOKEN_USER_DETAILS_FAILED:
            return {
                ...state,
                isProcessing : false
            }
        default:
            return state 
    }
}