import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
  makeStyles,
  Card,
  CardHeader,
  CircularProgress,
  Backdrop,
  IconButton,
} from '@material-ui/core/' 
import { Icon } from '../theme'
import {
  closeOverlay, 
} from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 2147483647,
    // color: '#fff',
  },
  card: {
    minWidth: 275,
  },
  spinner: {
  },
  text: {
    marginLeft: theme.spacing( 2 )
  }
}))

export default function Overlay() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const { 
    overlay,
  } = appSlice

  if (!overlay) return null
  const { 
    open,
    title,
    subheader,
    onActionClick,
    actionIcon,
  } = overlay
  if (!open) return null

  return <Backdrop 
            open
  	      	className={ clsx( classes.backdrop ) } 
      			onClick={ ( e ) => {
      				e.preventDefault()
              closeOverlay()
      			}}>

            <Card className={ clsx( classes.card ) } >
              <CardHeader 
                title={ title }
                subheader={ subheader } 
                avatar={ <div className={ clsx( classes.spinner ) }>
                            <CircularProgress color={ `primary` } />
                          </div> }
                action={ onActionClick ? <IconButton
                          onClick={ onActionClick }>
                        <Icon icon={ actionIcon } color={ `primary` } />
                      </IconButton> : null }
              />
            </Card>
  	      </Backdrop>
}
