import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { app } from '../firebase';

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
