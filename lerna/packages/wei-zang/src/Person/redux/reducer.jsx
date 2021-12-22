import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const personSlice = {
  error: null,
}

const personReducer = createReducer( personSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { personReducer }
