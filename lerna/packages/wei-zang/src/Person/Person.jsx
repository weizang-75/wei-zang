import React from 'react'
// import { useSelector } from 'react-redux' 
import { 
  makeStyles,
  CircularProgress,
  Backdrop,
  Typography,
} from '@material-ui/core/' 
// import {
//   toggleOverlay, 
// } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 2147483647,
    color: '#fff',
  },
  text: {
    marginLeft: theme.spacing( 2 )
  }
}))

export default function Person() {
  
  const classes = useStyles()
  // const appSlice = useSelector(state => state.app)
  // const { 
  //   overlay,
  // } = appSlice

  // if (!overlay) return null

  return <Backdrop 
  	      	className={ classes.backdrop } 
  	      	open
      			onClick={ ( e ) => {
      				e.preventDefault()
              // console.log ( 'close Overlay' )
              // toggleOverlay( false)
      			}}>
  	        <CircularProgress color={ `inherit` } />
            <Typography variant={ `h5` } className={ classes.text } >
              {`Overlay`}
            </Typography>
  	      </Backdrop>
}
