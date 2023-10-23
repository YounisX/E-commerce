// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnwxhcHkjb6oIzFCtJo6QxYQUBx8vaBXg",
  authDomain: "ibuy-400909.firebaseapp.com",
  projectId: "ibuy-400909",
  storageBucket: "ibuy-400909.appspot.com",
  messagingSenderId: "212597658936",
  appId: "1:212597658936:web:5e774c4a54d4103e2b5dcd",
  measurementId: "G-CSQNEQTGE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);