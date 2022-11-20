
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0gd3eqAXPnBiegiA0I7WJd9l444XwTjk",
    authDomain: "test-ceaad.firebaseapp.com",
    projectId: "test-ceaad",
    storageBucket: "test-ceaad.appspot.com",
    messagingSenderId: "257371495177",
    appId: "1:257371495177:web:8605afef8d086dd03ed1d8",
    measurementId: "G-37S4TK7H1D"
  };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);