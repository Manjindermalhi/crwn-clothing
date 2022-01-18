import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyChWhVub7CIG8rpRm5wUofeb2-A426xvZ4",
    authDomain: "crwn-clothing-7c318.firebaseapp.com",
    projectId: "crwn-clothing-7c318",
    storageBucket: "crwn-clothing-7c318.appspot.com",
    messagingSenderId: "910165600917",
    appId: "1:910165600917:web:2f5910ba55c51d40d7499c",
    measurementId: "G-VWQRBH4L0M"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;