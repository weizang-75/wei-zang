import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'

export const error = createAction(`PERSON/ERROR`) 

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `PERSON/ERROR`, error })
	return true
}
