import { getStore } from '../../../'

export const getSizes = () => {
	try {
		const flashSlice = getStore().getState().flash
		const { stage } = flashSlice
		return stage
	} catch ( error ){
		console.log ('getSizes error', error)
		return false
	}
}
