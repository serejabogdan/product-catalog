import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBxb0xYXk2ZbLcz_3FymDkVuYjhq0eTeVU',
  authDomain: 'auth-test-dc179.firebaseapp.com',
  databaseURL: 'https://auth-test-dc179-default-rtdb.firebaseio.com',
  projectId: 'auth-test-dc179',
  storageBucket: 'auth-test-dc179.appspot.com',
  messagingSenderId: '238220952507',
  appId: '1:238220952507:web:ee260232234f8bac0e7a9e'
});
const auth = app.auth();
const storage = app.storage();
const database = app.database();
export {auth, storage, database};
export default app;
