
import * as constants from './constants';

export const authenticate = (username, password) => {
    return dispatch => {
        dispatch({ type : constants.AUTHENTICATE })
        const url = `${process.env.REACT_APP_API_ROOT}/forces`;

        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({ type : constants.AUTHENTICATION_SUCCESS })
        })
        .catch(err => {
            dispatch({ type : constants.AUTHENTICATION_FAILED })
        })
        
    }
}