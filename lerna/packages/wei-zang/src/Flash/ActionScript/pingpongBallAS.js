//  topleft, topmiddle, toptright, centered, bottomleft, bottommiddle, bottomright
import {
    setPingpongBall,
} from '../../redux/flash/actions'
import { 
    gsap,
    Power1,
} from 'gsap'
import { 
    getElement,
    setPosition,
    toPosition,    
} from './'

const duration = 1

const onResize = () => {
    const el = getElement( `pingpongBall` )
    if ( !el ) return false
    setPosition( el, `centered` )
    return true
}

const play = () => {
    const el = getElement( `pingpongBall` )
    if ( !el ) return false
    setPosition( el, `centered` )
    return true
}

const setup = () => {  
    const el = getElement( `pingpongBall` )
    if ( !el ) return false
    gsap.set ( `#pingpongBall`, {
        opacity: 1,
        x: - el.width,
        y: - el.height,
    })
    setPingpongBall({
        setup: true,
        playing: false,
    })
    return true
}

const spin = () => {
    const el = getElement( `pingpongBall` )
    if ( !el ) return false
    gsap.fromTo ( `#pingpongBall`, {
        rotation: 0,
    }, {
        rotation: 360,
        duration: duration,
        ease: Power1.easeOut,
        onComplete: () => {
            // console.log ('toPosition done')
        }
    })

    return true
}

const moveTo = ( position ) => { 
    // console.log ( 'pingpongBall moveTo', position )
    const el = getElement( `pingpongBall` )
    if ( !el ) return false
    toPosition( el, position )
    return true
}

export const pingpongBallAS = (event, payload) => {
    switch ( event ) {
        case `onResize`: return onResize()
        case `setup`: return setup()
        case `spin`: return spin()
        case `moveTo`: return moveTo(payload)
        case `play`: return play()
        default: { return null }
    }
}
