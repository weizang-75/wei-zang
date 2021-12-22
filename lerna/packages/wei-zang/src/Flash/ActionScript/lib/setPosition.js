import { 
    gsap,
} from 'gsap'
import {
    getSizes,
    getElement,
} from '../'

export const setPosition = (el , position) => {
	try {


		// is there a WP navbar?
		// wpadminbar
		const wpadminbar = getElement( `wpadminbar` )
		// console.log ( 'wpadminbar', wpadminbar )
		let bottomOffset = 0
		if ( wpadminbar ){
			bottomOffset = wpadminbar.height
		}


		const sizes = getSizes()
		const elId = el.id
		const elWidth = el.width
		const elHeight = el.height
		const stageWidth = sizes.width
		const stageHeight = sizes.height
		
		// console.log ( 'setPosition', position, stageWidth, stageHeight, elWidth, elHeight, elId )

		let pos = {}

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
			y: stageHeight - elHeight - bottomOffset,
		}

		if ( position === `bottommiddle` ) pos = {
			x: stageWidth/2 - elWidth/2,
			y: stageHeight - elHeight - bottomOffset,
		}

		if ( position === `bottomright` ) pos = {
			x: stageWidth - elWidth,
			y: stageHeight - elHeight - bottomOffset,
		}

	    gsap.set( elId, {
	    	x: pos.x,
	    	y: pos.y,
	    })


		return true
	} catch ( error ){
		console.log ('setPosition error', error)
		return false
	}
}
