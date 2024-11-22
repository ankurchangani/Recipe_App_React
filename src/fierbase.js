// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALt-Gyn5vkEoa-9lfzcSov9LfTkDDWUBw",
  authDomain: "recipe-project-react.firebaseapp.com",
  projectId: "recipe-project-react",
  storageBucket: "recipe-project-react.appspot.com",
  messagingSenderId: "638737237931",
  appId: "1:638737237931:web:252d0a17c685cbf6e8f4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
