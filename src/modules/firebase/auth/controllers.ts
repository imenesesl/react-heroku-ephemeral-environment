import {
  beforeAuthStateChanged as beforeFirebaseAuthStateChanged,
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged
} from 'firebase/auth';

import { app } from '../firebase';

const auth = getAuth(app);

export const onAuthStateChanged = onFirebaseAuthStateChanged;
export const beforeAuthStateChanged = beforeFirebaseAuthStateChanged;
export const signOut = auth?.signOut;
