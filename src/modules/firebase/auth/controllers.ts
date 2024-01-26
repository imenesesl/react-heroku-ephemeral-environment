import {
  getAuth,
  NextOrObserver,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  User
} from 'firebase/auth';

import { app } from '../firebase';

const auth = getAuth(app);

export const onAuthStateChanged = (observer: NextOrObserver<User>) =>
  onFirebaseAuthStateChanged(auth, observer);

export const signOut = auth?.signOut;
