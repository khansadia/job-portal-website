// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Gyie2T4SpRqdEpSbpO-mDOB7m6aR-_M",
  authDomain: "online-job-portal-2a4f8.firebaseapp.com",
  projectId: "online-job-portal-2a4f8",
  storageBucket: "online-job-portal-2a4f8.appspot.com",
  messagingSenderId: "97224844038",
  appId: "1:97224844038:web:28596fbe853e79b7cdb487",
  measurementId: "G-5D72MZQFBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export {db};