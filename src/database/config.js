import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtQH2Grw8rkDqEEDtfyutJU1ba9CaciAs",
  authDomain: "photowall-b4577.firebaseapp.com",
  databaseURL: "https://photowall-b4577-default-rtdb.firebaseio.com",
  projectId: "photowall-b4577",
  storageBucket: "photowall-b4577.appspot.com",
  messagingSenderId: "750510954257",
  appId: "1:750510954257:web:7ab8d186bed85d27649eb0",
  measurementId: "G-7DXPWJ774S"
};

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

// Use these for db
const database = firebase.database();

export {database}