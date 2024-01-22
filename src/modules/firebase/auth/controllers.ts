import {
  beforeAuthStateChanged as beforeFirebaseAuthStateChanged,
  onAuthStateChanged as onFirebaseAuthStateChanged
} from 'firebase/auth';

export const onAuthStateChanged = onFirebaseAuthStateChanged;
export const beforeAuthStateChanged = beforeFirebaseAuthStateChanged;
