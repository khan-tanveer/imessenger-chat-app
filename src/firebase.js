import firebase from "firebase ";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCy-aUn7JHW4N6GRO48cr0CkUOIPGxnagk",
  authDomain: "facebook-messenger-clone-11e06.firebaseapp.com",
  projectId: "facebook-messenger-clone-11e06",
  storageBucket: "facebook-messenger-clone-11e06.appspot.com",
  messagingSenderId: "347843888851",
  appId: "1:347843888851:web:319efa24eee4ef326d3626",
  measurementId: "G-05KCWBXJD0",
});

const db = firebaseApp.firestore();

export default db;
