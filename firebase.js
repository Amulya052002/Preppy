// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVdN8nY2Efa8tUYE1AOXgp7HXXrVG_w00",
  authDomain: "preppy-416fe.firebaseapp.com",
  projectId: "preppy-416fe",
  storageBucket: "preppy-416fe.firebasestorage.app",
  messagingSenderId: "632865803450",
  appId: "1:632865803450:web:2851bfb217b5f7f68d4683",
  measurementId: "G-7FXKM2LMVK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);