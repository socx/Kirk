import * as constants from './constants'

const initialState = {
    name  :'',
    children : [],
    isFetching : false
}

export default(state=initialState, action) => {
    switch(action.type) {
        case constants.GET_DATA:
            return {
                ...state,
                isFetching : true
            }
        case constants.GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching : false,
                name : action.payload.name,
                children : action.payload.children
            }
        default:
            return state;
    }
}