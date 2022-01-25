import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAHk-zh4Piew3HsKaZpMhNPf6ajm21arv8",
    authDomain: "login-8f4c1.firebaseapp.com",
    projectId: "login-8f4c1",
    storageBucket: "login-8f4c1.appspot.com",
    messagingSenderId: "573843804365",
    appId: "1:573843804365:web:16851643832a6c53af5984",
    measurementId: "G-GLLTP76NJY"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const auth = app.auth();
// const db = app.firestore();