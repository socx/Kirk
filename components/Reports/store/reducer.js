import { GET_STUFF } from './constants'
import { createReducer }    from '../../../reducers/utils';

const initialState = {
  stuff: {"a" : 0, "b": 0}
}
/*
export default function update(state = initialState, action) {

  if(action.type === GET_STUFF) {
      debugger
    return { stuff: {"a" : state.stuff.a + action.payload.x, "b" : state.stuff.b + action.payload.y } }
  }

  return state
}
*/
const getStuff  = (state, payload) => {
    debugger
    return { stuff: {"a" : state.stuff.a + payload.x, "b" : state.stuff.b + payload.y } }
}

const reducerMap = {
  [GET_STUFF]: (state, payload) => getStuff(state, payload),
}

debugger

export default createReducer(initialState, reducerMap);