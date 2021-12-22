import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
} from '@material-ui/core'
import { 
  ArrowButton,
  PinpongBall,
} from './MovieClips'

import { 
  pingpongBallAS, 
  arrowAS,
} from './ActionScript'

import { 
  setStage,
  setPingpongBall,
} from '../redux/flash/actions'

const useStyles = makeStyles((theme) => ({ 
  stage: {
    position: 'relative',
    zIndex: 99998,
  },
  movieClip:{
    position: 'absolute',
  },
}))


const addEvent = function(object, type, callback) {
    if (object === null || typeof(object) === 'undefined') return
    if (object.addEventListener) {
        object.addEventListener(type, callback, false)
    } else if (object.attachEvent) {
        object.attachEvent( 'on' + type, callback)
    } else {
        object["on"+type] = callback
    }
}
addEvent( window, `resize`, function( event ) {
  setTimeout( () => { 
      setStage() 
  }, 100 )
})
setTimeout( () => { 
    setStage() 
}, 100 )

export default function Flash() {
  
  const classes = useStyles()
  const flashSlice = useSelector(state => state.flash)

  React.useEffect(() => {
    const { pingpongBall } = flashSlice
    const { 
      setup,
      playing, 
    } = pingpongBall
    
    if ( !setup ) pingpongBallAS ( 'setup' )
    if ( setup && !playing ) {
      setPingpongBall({
        setup: true,
        playing: true,
      })
      setTimeout( () => {
        pingpongBallAS ( 'play' )
        arrowAS( 'setup' )
      }, 10) 
    } 

  }, [ flashSlice ])

  return  <div className={ clsx( classes.stage ) }>

              <div id={ `pingpongBall` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 1000, opacity: 0,
                }}>
                <PinpongBall settings={{
                  onClick: ( e ) => {
                    e.preventDefault()
                    pingpongBallAS('moveTo', 'centered')
                    pingpongBallAS( 'spin' )
                  },
                  ballColor: `teal`,
                  smileColor: `white`,
                }} />
              </div>

              <div id={ `arrowBottomRight` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 500, opacity: 0,
                  width: 100, height: 100,
                  overflow: 'hidden'
                }}>
                <ArrowButton settings={{
                  label: `Bottom Right`,
                  direction: `rightDown`,
                  color: `pink`,
                  onClick: ( e ) => {
                    e.preventDefault()
                    pingpongBallAS('moveTo', 'bottomright')
                    pingpongBallAS( 'spin' )
                  },
                }} />
              </div>
              
              <div id={ `arrowBottomLeft` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 400, opacity: 0,
                }}>
                <ArrowButton settings={{
                  label: `Bottom Left`,
                  direction: `leftDown`,
                  color: `pink`,
                  onClick: ( e ) => {
                    e.preventDefault()
                    pingpongBallAS('moveTo', 'bottomleft')
                    pingpongBallAS( 'spin' )
                  },
                }} />
              </div>

              <div id={ `arrowTopLeft` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 300, opacity: 0,
                  width: 100, height: 100,
                  overflow: 'hidden'
                }}>
                <ArrowButton settings={{
                  label: `Top Left`,
                  direction: `leftUp`,
                  color: `blue`,
                  onClick: ( e ) => {
                    e.preventDefault()
                    pingpongBallAS('moveTo', 'topleft')
                    pingpongBallAS( 'spin' )
                  },
                }} />
              </div>


              <div id={ `arrowTopRight` } 
                className={ clsx( classes.movieClip ) }
                style={{ 
                  zIndex: 200, opacity: 0,
                }}>
                <ArrowButton settings={{
                  label: `Top Right`,
                  direction: `rightUp`,
                  color: `red`,
                  onClick: ( e ) => {
                    e.preventDefault()
                    pingpongBallAS('moveTo', 'topright')
                    pingpongBallAS( 'spin' )
                  },
                }} />
              </div>

              
           </div>
  }
