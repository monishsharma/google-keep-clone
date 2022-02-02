// Import the functions you need from the SDKs you need
// import { initializeApp } from  "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MEAASGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();

export { db, auth, storage };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const authentication = firebase.auth;