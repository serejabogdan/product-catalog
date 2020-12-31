import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBxb0xYXk2ZbLcz_3FymDkVuYjhq0eTeVU',
  authDomain: 'auth-test-dc179.firebaseapp.com',
  projectId: 'auth-test-dc179',
  storageBucket: 'auth-test-dc179.appspot.com',
  messagingSenderId: '238220952507',
  appId: '1:238220952507:web:ee260232234f8bac0e7a9e'
});

export const auth = app.auth();
export default app;
