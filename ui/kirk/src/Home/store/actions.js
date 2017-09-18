import * as constants from './constants'

export const getData = ()  => {
    return dispatch => {        
        dispatch({ type : constants.GET_DATA })
        const url ='https://data.police.uk/api/forces';
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const index = Math.floor(Math.random() * 43 ) + 1
            dispatch({
                type : constants.GET_DATA_SUCCESS,
                payload : { name : json[index].name , children : json}
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}