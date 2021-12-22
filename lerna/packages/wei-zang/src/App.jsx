import React from 'react'
// import { useSelector } from 'react-redux'
import {
  createTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core/'
import {
    Flash,
} from './Flash'
import {
    Overlay,
} from './components'

export default function App() {

  let colorTheme = '#42949F'
  let colorBg = '#126970'
  let theme = {
    palette:{
      type: 'dark',
      background: {
        default: 'none',
        paper: colorBg,
        main: colorBg,
      },
      primary: {
        main: colorTheme,
      },
      secondary: {
        main: colorBg,
      },
    }
  }

  return <MuiThemeProvider theme={ createTheme( theme ) }>
              <CssBaseline />
              <Overlay /> 
              <Flash />    
         </MuiThemeProvider>

}
