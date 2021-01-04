import {auth} from '../firebaseConfig';

export function signOut() {
  return auth.signOut();
}

export function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}
