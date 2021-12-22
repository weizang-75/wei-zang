import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  overlay,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
  overlay: {
    open: false,
    title: `Booting ${pJSON.name}`,
    subheader: `version ${pJSON.version}`,
    actionIcon: `close`,
    onActionClick: ( e ) => {
      e.preventDefault()
    },
  }
}

const appReducer = createReducer( appSlice, {

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
