// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDlPPfTB53683FxqsYsyxc7UWsXntWuypE",
  authDomain: "challenge-e579f.firebaseapp.com",
  databaseURL: "https://challenge-e579f.firebaseio.com",
  projectId: "challenge-e579f",
  storageBucket: "challenge-e579f.appspot.com",
  messagingSenderId: "111193837025",
  appId: "1:111193837025:web:ea9b02bbade5d92dde56a0",
  measurementId: "G-FPY5K08S7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
