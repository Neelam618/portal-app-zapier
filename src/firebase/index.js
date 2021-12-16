// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS8ECjZ3zeN6G-0lj47lkVuDuzSq31BRI",
  authDomain: "innerkore.firebaseapp.com",
  databaseURL: "https://innerkore.firebaseio.com",
  projectId: "innerkore",
  storageBucket: "innerkore.appspot.com",
  messagingSenderId: "476684203240",
  appId: "1:476684203240:web:da00b3e0bcfb77a686c55d",
  measurementId: "G-Y1ZX5ZW6L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);