import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMq1oIomezLUhX6VjvQa-mL0phk5JVQ28",
  authDomain: "magazine-24259.firebaseapp.com",
  projectId: "magazine-24259",
  storageBucket: "magazine-24259.appspot.com",
  messagingSenderId: "51305143180",
  appId: "1:51305143180:web:5927cdb091ac801b5754a9",
  measurementId: "G-93DEKHKP2V"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};