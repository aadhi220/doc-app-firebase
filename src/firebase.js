// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBPoLN18G5rKH_Kw0u0wcQ3UYmCCHuQ794",
  authDomain: "docapp-fc3a3.firebaseapp.com",
  projectId: "docapp-fc3a3",
  storageBucket: "docapp-fc3a3.appspot.com",
  messagingSenderId: "1097503368614",
  appId: "1:1097503368614:web:57369714f499a61aa95b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);