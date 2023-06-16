// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaCb8qeLFvssZ1QOp2qG0vYYSOMf_XBQM",
  authDomain: "wealth-colony.firebaseapp.com",
  projectId: "wealth-colony",
  storageBucket: "wealth-colony.appspot.com",
  messagingSenderId: "740327584911",
  appId: "1:740327584911:web:d5252541972672bb8eecfa",
  measurementId: "G-L4W34WN1E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);