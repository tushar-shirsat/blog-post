import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDY-ZEUAxwbNfcl3he9g2ryxLQr_TwtZpY",
    authDomain: "blog-post-e6c36.firebaseapp.com",
    projectId: "blog-post-e6c36",
    storageBucket: "blog-post-e6c36.appspot.com",
    messagingSenderId: "292062833985",
    appId: "1:292062833985:web:faec3ed95cd6afafa885c0",
    measurementId: "G-X82NT6074H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db,auth,storage};