const firebase = window.firebase;

const config = {
  apiKey: "AIzaSyBsfqA9HCuh1ZDm44jy4uccUbFXiN3TxSA",
  authDomain: "crwn-db-1853e.firebaseapp.com",
  databaseURL: "https://crwn-db-1853e.firebaseio.com",
  projectId: "crwn-db-1853e",
  storageBucket: "crwn-db-1853e.appspot.com",
  messagingSenderId: "898610327843",
  appId: "1:898610327843:web:debace703310928b741c96",
  measurementId: "G-99PWYLZMPF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
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
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
