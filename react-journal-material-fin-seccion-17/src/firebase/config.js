// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6Z17NfCGVEh9k2Q36s0I6uRZIoU7mrc",
  authDomain: "react-course-95788.firebaseapp.com",
  projectId: "react-course-95788",
  storageBucket: "react-course-95788.appspot.com",
  messagingSenderId: "114225886422",
  appId: "1:114225886422:web:6e0be21d9692dcb7220577"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB =getFirestore(FirebaseApp) ;