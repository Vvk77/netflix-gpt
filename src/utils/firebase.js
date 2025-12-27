// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMUiRC1bPeQFyL-2_xIRQV8dgMw3XPjLw",
  authDomain: "netflixgpt-1d3f7.firebaseapp.com",
  projectId: "netflixgpt-1d3f7",
  storageBucket: "netflixgpt-1d3f7.firebasestorage.app",
  messagingSenderId: "60957761246",
  appId: "1:60957761246:web:68a2920109b40829edec4f",
  measurementId: "G-FPLD72CSHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();