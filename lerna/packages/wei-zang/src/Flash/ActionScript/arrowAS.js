import { 
    gsap,
    Power1,
} from 'gsap'
import { 
    getElement,
    setPosition,    
} from './'

const duration = 1

const setup = () => {
    let el
    el = getElement( `arrowTopRight` )
    if ( !el ) return false
    setPosition( el, `topright` )
    gsap.to ( `#arrowTopRight`, {
        opacity: 1,
        duration: duration,
        rotation: -45,
        ease: Power1.easeOut,
        onComplete: () => {
            // console.log ('arrowAS setup done')
        }
    })

    el = getElement( `arrowTopLeft` )
    if ( !el ) return false
    setPosition( el, `topleft` )
    gsap.to ( `#arrowTopLeft`, {
        opacity: 1,
        rotation: -135,
        duration: duration,
        ease: Power1.easeOut,
        onComplete: () => {
            // console.log ('arrowAS setup done')
        }
    })

    el = getElement( `arrowBottomLeft` )
    if ( !el ) return false
    setPosition( el, `bottomleft` )
    gsap.to ( `#arrowBottomLeft`, {
        opacity: 1,
        duration: duration,
        rotation: -225,
        ease: Power1.easeOut,
        onComplete: () => {
            // console.log ('arrowAS setup done')
        }
    })

    el = getElement( `arrowBottomRight` )
    if ( !el ) return false
    setPosition( el, `bottomright` )
    gsap.to ( `#arrowBottomRight`, {
        opacity: 1,
        duration: duration,
        ease: Power1.easeOut,
        rotation: 45,
        onComplete: () => {
            // console.log ('arrowAS setup done')
        }
    })

    return true
}


export const arrowAS = event => {
    switch ( event ) {
        case `setup`: return setup()
        default: { return null }
    }
}
