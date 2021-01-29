import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdpliM1aWTj3eI9I501u-_QlfMqAF0KAE",
  authDomain: "shoppies-b2c82.firebaseapp.com",
  projectId: "shoppies-b2c82",
  storageBucket: "shoppies-b2c82.appspot.com",
  messagingSenderId: "59470278108",
  appId: "1:59470278108:web:819f9b719927cd0de57319",
  measurementId: "G-X9Q83E4S6X",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
