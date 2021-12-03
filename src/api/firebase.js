import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQG6zpiMO0qbmJuFKEy-7pUvmqbyshRWg",
  authDomain: "scores-predictor.firebaseapp.com",
  projectId: "scores-predictor",
  storageBucket: "scores-predictor.appspot.com",
  messagingSenderId: "236188361759",
  appId: "1:236188361759:web:61bc6ee7963766ae86212a",
  measurementId: "G-LLX7TY779W",
};

// Initialize Firebase

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore;
const auth = firebase.auth;

export { db, auth };
