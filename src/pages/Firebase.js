import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJ1XbvfuPSuPBVp7SdQci_Uxwd9UWyXZc',
  authDomain: 'eshop-794c0.firebaseapp.com',
  projectId: 'eshop-794c0',
  storageBucket: 'eshop-794c0.appspot.com',
  messagingSenderId: '30896134279',
  appId: '1:30896134279:web:a12663f95ffa9771168022',
  measurementId: 'G-GJ03CMX6X9',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
