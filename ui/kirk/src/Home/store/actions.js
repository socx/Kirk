import * as constants from './constants'

export const getData = ()  => {
    return dispatch => {        
        dispatch({ type : constants.GET_DATA })
        const url = `${process.env.REACT_APP_API_ROOT}/forces`;
        fetch(url)
        .then((res) =>  res.json() )
        .then((json) => {
            const index = Math.floor(Math.random() * 43 ) + 1
            dispatch({
                type : constants.GET_DATA_SUCCESS,
                payload : { name : json[index].name , children : json}
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type : constants.GET_DATA_FAILED })
        })
    }
}