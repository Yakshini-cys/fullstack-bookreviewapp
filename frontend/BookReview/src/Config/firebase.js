import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZo8Y7Rqo3v_fA4Y8l2zkOi4x4_nqhdAM",
    authDomain: "bookfanatic-2c3f7.firebaseapp.com",
    projectId: "bookfanatic-2c3f7",
    storageBucket: "bookfanatic-2c3f7.appspot.com",
    messagingSenderId: "868786433706",
    appId: "1:868786433706:web:407d5e4b8a46aa10016ad3",
    measurementId: "G-G3TRDCQSQS"
  };
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase services
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { app, auth, db };