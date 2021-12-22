import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'

export const error = createAction(`APP/ERROR`) 
export const overlay = createAction(`APP/OVERLAY`) 

export const closeOverlay = () => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay: {
	    open: false,
	  }
	})
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return true
}
