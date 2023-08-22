// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEcwBwp_Ma5A9mycd3iMXcFjIharwwmKw",
  authDomain: "portfolio-charles-esf.firebaseapp.com",
  projectId: "portfolio-charles-esf",
  storageBucket: "portfolio-charles-esf.appspot.com",
  messagingSenderId: "708743601514",
  appId: "1:708743601514:web:8859250738f985f2019913",
  measurementId: "G-GRCCXLGNQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
