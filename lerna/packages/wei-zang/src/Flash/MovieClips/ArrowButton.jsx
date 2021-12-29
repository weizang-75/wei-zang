import React from 'react'
import clsx from 'clsx'
import { 
  makeStyles,
  ButtonBase,
} from '@material-ui/core/' 

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: theme.spacing(),
    // border: '1px solid black',
    // background: '#eee',
    borderRadius: theme.spacing(0.5),
  },
  label: {
    color: theme.palette.primary.main,
  },
}))

export default function ArrowButton( props ) {
  const classes = useStyles()
  const { settings } = props
  const { 
    onClick, 
  } = settings

  return <ButtonBase 
            onClick={ onClick }
            className={ clsx( classes.btn ) }>
            <svg width="300px" height="300px" viewBox="0 0 300 300">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Arrow1">
                    <rect id="BG" fill="none" fillOpacity="0" x="0" y="0" width="300" height="300"></rect> 
                    <polygon id="fat" fill="#ccc" points="2 3 121.187161 149.5 2 296 176.812839 296 296 149.5 176.812839 3"></polygon>
                    <polyline id="thin" fill="#333" points="118.300581 3 61 3 180.699419 149.5 61 296 118.300581 296 238 149.5 118.300581 3"></polyline>
                </g>
            </g>
        </svg>
    	</ButtonBase>
}
