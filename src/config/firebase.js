// Import the functions you need from the SDKs you need
// import { initializeApp } from  "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAzuC2msIEL8iFTffPYHtxfmCugQaoI3sc",
  authDomain: "keep-b7764.firebaseapp.com",
  projectId: "keep-b7764",
  storageBucket: "keep-b7764.appspot.com",
  messagingSenderId: "997603333199",
  appId: "1:997603333199:web:f662e2423055af576b463a",
  measurementId: "G-YMLNVHZQQP"
});

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();

export { db, auth, storage };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const authentication = firebase.auth;