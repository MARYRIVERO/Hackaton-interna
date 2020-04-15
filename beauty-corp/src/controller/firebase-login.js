<<<<<<< HEAD

=======
>>>>>>> eb92ce0fd0e2281e09795654f26c3159d46f3693
import firebase from '../firebase/firebase';

export const signIn = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const logIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
