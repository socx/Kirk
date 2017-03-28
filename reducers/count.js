
// import { createReducer }    from './utils';
// import { INCREASE, DECREASE } from '../constants'

// const initialState = {
//   number: 1
// }

// export default function update(state = initialState, action) {
//   debugger
//   if(action.type === INCREASE) {
//     return { number: state.number + action.amount }
//   }
//   else if(action.type === DECREASE) {
//     return { number: state.number - action.amount }
//   }
//   return state
// }


import { createReducer }    from './utils';
import { INCREASE, DECREASE } from '../constants'

const initialState = {
  number: 1
}

const increase = (state, payload) => {
  debugger
   return { number: state.number + payload }
}

const decrease = (state, payload) => {
  debugger
   return { number: state.number - payload }
}

const reducerMap = {
  [INCREASE]: (state, payload) => increase(state, payload),
  [DECREASE]: (state, payload) => decrease(state, payload),
}

debugger

export default createReducer(initialState, reducerMap);
