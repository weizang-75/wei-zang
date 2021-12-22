import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import { 
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 
  flashDialog: {
    zIndex: 99998,
  },
}))

const Transition = React.forwardRef( function Transition( props, ref ) {
  return <Slide direction={ `up` } ref={ ref } { ...props } />
})

export default function PopupDialog() {
  const classes = useStyles()
  
  // const appSlice = useSelector( state => state.app )
  // const settingsSlice = useSelector( state => state.settings )
  // const stageSlice = useSelector( state => state.stage )
  // const { 
  //   width,
  //   height,
  // } = stageSlice
  // const { 
  //   open,
  //   published,
  // } = appSlice
  // let isOpen = false
  // if ( open ) isOpen = true
  
  // const {
  //   settings,
  // } = settingsSlice
  // let flash = null
  // if (settings){
  //   flash = settings.flash
  // }

  const maxWidth = `sm`

  return  <React.Fragment>
              <Dialog
                open={ true }
                // fullScreen={ width < 650 || height < 450 ? true : false }
                classes={{
                  paper: classes.flashDialog
                }}
                className={ clsx( classes.flashDialog ) }
                TransitionComponent={ Transition }
                scroll={ `paper` }
                fullWidth
                maxWidth={ maxWidth }
                onClose={ ( e ) => { 
                  e.preventDefault()
                }}>
                <DialogTitle>
                  { `Popup Dialog`}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Popup Dialogs inform users about a task and can 
                    contain critical information, require decisions, 
                    or involve multiple tasks.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color={ `secondary` }
                    variant={ `contained` }
                  >
                    Close
                  </Button>

                </DialogActions>
              </Dialog>
            </React.Fragment>
  }
