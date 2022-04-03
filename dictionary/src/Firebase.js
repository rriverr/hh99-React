// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNBCMQ1iBFS4fO8CHjPBnZmOnCAQH9zsM",
  authDomain: "nihongo-dict.firebaseapp.com",
  projectId: "nihongo-dict",
  storageBucket: "nihongo-dict.appspot.com",
  messagingSenderId: "657314768147",
  appId: "1:657314768147:web:6b338cf0319c3377c266e6",
  measurementId: "G-CFHGENL9C7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();

export {db};