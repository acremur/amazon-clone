import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDObutZ2_ib9OxEx0KInMeC8Wks_Y_NOdI",
        authDomain: "clone-665e0.firebaseapp.com",
        databaseURL: "https://clone-665e0.firebaseio.com",
        projectId: "clone-665e0",
        storageBucket: "clone-665e0.appspot.com",
        messagingSenderId: "56127246222",
        appId: "1:56127246222:web:291ae5063cc3890711dedf",
        measurementId: "G-K8PYZY2VC6"
      }
) 

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }