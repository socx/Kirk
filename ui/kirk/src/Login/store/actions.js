
import * as constants from './constants';

export const authenticate = (username, password) => {
    console.log(username)
    console.log(password)
    return dispatch => {
        dispatch({ type : constants.AUTHENTICATE })
        const url = `${process.env.REACT_APP_API_ROOT}/forces`;

        fetch(url)
        .then(res => res.json())
        .then(json => {
            const token = Math.random().toString(18).substr(2, 15);
            localStorage.setItem('auth', token)
            dispatch({ type : constants.AUTHENTICATION_SUCCESS })
        })
        .catch(err => {
            dispatch({ type : constants.AUTHENTICATION_FAILED })
        })
        
    }
}

export const getTokenUserDetails = () => {
    // const token = localStorage.getItem('auth')
    return dispatch => {
        dispatch({ type : constants.GET_TOKEN_USER_DETAILS })
        const url = `${process.env.REACT_APP_API_ROOT}/forces`;

        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({ 
                type : constants.GET_TOKEN_USER_DETAILS_SUCCESS,
                userDetails : json
            })
        })
        .catch(error => {
            dispatch({ 
                type : constants.GET_TOKEN_USER_DETAILS_FAILED,
                error
            })
        })        
    }
}

export const submitForgottenPasswordEmail = (email) => {
    
    console.log(email)
    return dispatch => {
        dispatch({ type : constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL })
        const url = `${process.env.REACT_APP_API_ROOT}/forces`;

        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({ 
                type : constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL_SUCCESS,

            })
        })
        .catch(error => {
            dispatch({ 
                type : constants.SUBMIT_FORGOTTEN_PASSWORD_EMAIL_FAILED,
                error
            })
        }) 
        
    }
}