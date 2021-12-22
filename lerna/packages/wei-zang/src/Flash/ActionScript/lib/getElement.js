export const getElement = divId => {
	try {
		const el = document.getElementById( divId )
		if ( !el ) return false
		return {
			id: `#${divId}`,
			div: el,
			height: el.offsetHeight,
			width: el.offsetWidth,
		}
	} catch ( error ){
		console.log ('getElement error', error)
		return false
	}
}
