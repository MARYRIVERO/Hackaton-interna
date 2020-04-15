import firebase from '../firebase/firebase';

export const signIn = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const logIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
