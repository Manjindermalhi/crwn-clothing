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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        
        } catch (error){
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;