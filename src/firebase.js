import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOM,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJ_ID,
    storageBucket: process.env.REACT_APP_STORE_BUCK,
    messagingSenderId: process.env.REACT_APP_MESS_ID,
    appId: process.env.REACT_APP_APP_ID
})

export default firebaseConfig;