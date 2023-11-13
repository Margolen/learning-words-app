// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCF7-cRmev8aCEdPbPjdO0T6U_8itf172c',
  authDomain: 'flashcards-fc64a.firebaseapp.com',
  projectId: 'flashcards-fc64a',
  storageBucket: 'flashcards-fc64a.appspot.com',
  messagingSenderId: '388605595144',
  appId: '1:388605595144:web:c209885898f85d9e464bbd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
