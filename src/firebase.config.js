import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZtzMPIAlsdMk7r61lUnY9yyoHa2rO0B0',
  authDomain: 'house-marketplace-app-3e896.firebaseapp.com',
  projectId: 'house-marketplace-app-3e896',
  storageBucket: 'house-marketplace-app-3e896.appspot.com',
  messagingSenderId: '199586558106',
  appId: '1:199586558106:web:2fe001ba75ddf09d67ef23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
