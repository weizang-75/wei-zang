import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import { 
	pingpongBallAS,
	arrowAS,
} from '../../Flash/ActionScript/'

export const error = createAction(`FLASH/ERROR`) 
export const pingpongBall = createAction(`FLASH/PINGPONGBALL`) 
export const stage = createAction(`FLASH/STAGE`) 

export const setStage = () => {
	const store = getStore()
	const width = document.documentElement.clientWidth
	const height = document.documentElement.clientHeight
	const mobile = width < 650 || height < 450
	// console.log ( 'setStage', width, height )
	store.dispatch({type: `FLASH/STAGE`, stage: {
		width,
		height,
		mobile,
	}})
	setTimeout( () => {
		pingpongBallAS( `onResize` )
		arrowAS( `setup` )
	}, 100)
	return true
}


export const setPingpongBall = pingpongBall => {
	const store = getStore()
	store.dispatch({type: `FLASH/PINGPONGBALL`, pingpongBall })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `FLASH/ERROR`, error })
	return true
}
