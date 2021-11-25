// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUW41PmrM2xleVdHi72G6OCF_QlBfRkA",
  authDomain: "sparta-react-basic-c4949.firebaseapp.com",
  projectId: "sparta-react-basic-c4949",
  storageBucket: "sparta-react-basic-c4949.appspot.com",
  messagingSenderId: "1021191329938",
  appId: "1:1021191329938:web:ccf38054e8562a49ca2e4b",
  measurementId: "G-5R014FJCK1"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();