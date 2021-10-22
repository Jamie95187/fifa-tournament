import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyB-ucTZG5AGd7RA67XqETWbT2bJgYk1vRE",
  authDomain: "vue-fifa.firebaseapp.com",
  projectId: "vue-fifa",
  storageBucket: "vue-fifa.appspot.com",
  messagingSenderId: "963994682548",
  appId: "1:963994682548:web:5a211b47a475be3487c3e1",
  measurementId: "G-2VV343QB70"
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.firestore();