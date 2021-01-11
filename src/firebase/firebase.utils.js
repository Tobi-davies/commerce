import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyADPF1j8o89Uio6SPTdQGZfI5WALAULZw0",
  authDomain: "crwn-db-a7c02.firebaseapp.com",
  databaseURL: "https://crwn-db-a7c02.firebaseio.com",
  projectId: "crwn-db-a7c02",
  storageBucket: "crwn-db-a7c02.appspot.com",
  messagingSenderId: "1017879130825",
  appId: "1:1017879130825:web:672e9466436edd41001318",
  measurementId: "G-8CFNNB62HF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc("users/NFSLKMSDJKFKSNJ"));

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
  // console.log(firestore.doc("users/354gdkkglsjrc"));
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyADPF1j8o89Uio6SPTdQGZfI5WALAULZw0",
//   authDomain: "crwn-db-a7c02.firebaseapp.com",
//   databaseURL: "https://crwn-db-a7c02.firebaseio.com",
//   projectId: "crwn-db-a7c02",
//   storageBucket: "crwn-db-a7c02.appspot.com",
//   messagingSenderId: "1017879130825",
//   appId: "1:1017879130825:web:672e9466436edd41001318",
//   measurementId: "G-8CFNNB62HF",
// };

// firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
