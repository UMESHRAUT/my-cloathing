import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrqqYwcJW3om3EpX-4LBbaLHr_9Hj3H44",
  authDomain: "crwn-db-1cb24.firebaseapp.com",
  databaseURL: "https://crwn-db-1cb24.firebaseio.com",
  projectId: "crwn-db-1cb24",
  storageBucket: "",
  messagingSenderId: "959805302236",
  appId: "1:959805302236:web:b400f99898bc4770755b19"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
