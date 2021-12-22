import pJSON from '../package.json'
import './theme/style.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

import { Provider } from 'react-redux'
import reduxStore from './redux'
// import { setSize } from './redux/stage/actions'

import App from './App'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const store = reduxStore()
export const getStore = () => { return store }

// const fireConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// }

// const fBase = initializeApp( fireConfig )
// export const getFBase = () => { return fBase }

// const fStore = getFirestore()
// const getFStore = () => { return fStore }
// export { getFStore }



ReactDOM.render( <Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('pingpong'))
