import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCo7G3Zh0lO38qHU38IOy7muqNTrGvVGsM",
  authDomain: "crwn-422c6.firebaseapp.com",
  databaseURL: "https://crwn-422c6.firebaseio.com",
  projectId: "crwn-422c6",
  storageBucket: "crwn-422c6.appspot.com",
  messagingSenderId: "69441280849",
  appId: "1:69441280849:web:760b3e8e8575e5e56f5170",
  measurementId: "G-VCH55LQKTM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
