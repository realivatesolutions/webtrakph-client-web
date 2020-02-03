import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


  const firebaseConfig = {
  apiKey: "AIzaSyCSvntYCzkfrQ6U53j47OStG9btiiNWNqU",
  authDomain: "wetrakph-c627b.firebaseapp.com",
  databaseURL: "https://wetrakph-c627b.firebaseio.com",
  projectId: "wetrakph-c627b",
  storageBucket: "wetrakph-c627b.appspot.com",
  messagingSenderId: "561036518593",
  appId: "1:561036518593:web:4b12993cf3c1d1488c6040",
  measurementId: "G-VG6NXWM46Y"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
