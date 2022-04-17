// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUllVk5vHBZD6SgyvONoLVK0pZgEdhjY",
  authDomain: "the-gourmet-kitchen.firebaseapp.com",
  projectId: "the-gourmet-kitchen",
  storageBucket: "the-gourmet-kitchen.appspot.com",
  messagingSenderId: "1075551194077",
  appId: "1:1075551194077:web:49ea6e837b72fb616a0434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;