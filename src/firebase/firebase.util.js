import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD0K_29TwBitw7yo29BaJSVn_t2OD_dMfU",
    authDomain: "siddu-clothing-db.firebaseapp.com",
    databaseURL: "https://siddu-clothing-db.firebaseio.com",
    projectId: "siddu-clothing-db",
    storageBucket: "siddu-clothing-db.appspot.com",
    messagingSenderId: "650249471566",
    appId: "1:650249471566:web:2e8840ccc14b7aafc7651f",
    measurementId: "G-L4B2Q9FGRE"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters = () => auth.signInWithPopup(provider);

export default firebase;
