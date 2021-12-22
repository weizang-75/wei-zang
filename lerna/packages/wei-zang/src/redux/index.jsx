import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { flashReducer, flashSlice } from './flash/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    flash: flashReducer,
  })

  const preloadedState = {
    app: appSlice,
    flash: flashSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore