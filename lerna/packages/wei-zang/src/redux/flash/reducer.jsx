import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  pingpongBall,
  stage,
} from "./actions"

export const flashSlice = {
  error: null,
  stage:{
     width: 0,
     height: 0,
     mobile: false,
  },
  pingpongBall: {
    setup: false,
    playing: false,
  },

}

const flashReducer = createReducer( flashSlice, {

  [stage]: (state, action) => {
    state.stage = action.stage
    return state
  },

  [pingpongBall]: (state, action) => {
    state.pingpongBall = action.pingpongBall
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { flashReducer }
