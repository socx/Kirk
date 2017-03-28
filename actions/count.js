import { INCREASE, DECREASE } from '../constants'
import { push } from 'react-router-redux'

export function increase(n) {
  debugger
  return {
    type: INCREASE,
    payload: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    payload: n
  }
}

export function resetState() {
    return (dispatch) => {
        const action = {
            type: 'RESET_STATE'
        }
        dispatch(action)
        dispatch(push('/'))
    }
}

