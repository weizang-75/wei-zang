import { 
    gsap,
    Power1,
} from 'gsap'
import {
    getSizes,
} from '../'

const duration = 1

export const toPosition = (el , position) => {
	
	try {
		const sizes = getSizes()
		const elId = el.id
		const elWidth = el.width
		const elHeight = el.height
		const stageWidth = sizes.width
		const stageHeight = sizes.height
		
		// console.log ( 'setPosition', position, stageWidth, stageHeight, elWidth, elHeight, elId )

		let pos

		if ( position === `centered` ) pos = {
			x: stageWidth/2 - elWidth/2,
			y: stageHeight/2 - elHeight/2,
		}

		if ( position === `topleft` ) pos = {
			x: 0,
			y: 0,
		}

		if ( position === `topmiddle` ) pos = {
			x: stageWidth/2 - elWidth/2,
			y: 0,
		}

		if ( position === `topright` ) pos = {
			x: stageWidth - elWidth,
			y: 0,
		}

		if ( position === `bottomleft` ) pos = {
			x: 0,
			y: stageHeight - elHeight,
		}

		if ( position === `bottommiddle` ) pos = {
			x: stageWidth/2 - elWidth/2,
			y: stageHeight - elHeight,
		}

		if ( position === `bottomright` ) pos = {
			x: stageWidth - elWidth,
			y: stageHeight - elHeight,
		}

	    gsap.to( elId, {
	    	x: pos.x,
	    	y: pos.y,
	        duration: duration,
	        ease: Power1.easeOut,
	        onComplete: () => {
	        	// console.log ('toPosition done')
	        }
	    })


		return true
	} catch ( error ){
		console.log ('toPosition error', error)
		return false
	}
}
