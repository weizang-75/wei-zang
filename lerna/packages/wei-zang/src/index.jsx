import pJSON from '../package.json'
import './theme/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import App from './App'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const store = reduxStore()
export const getStore = () => { return store }

ReactDOM.render( <Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('pingpong'))
