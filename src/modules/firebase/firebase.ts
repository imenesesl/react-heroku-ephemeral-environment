import { getEnv } from '@utilities/get-env';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: getEnv('FIREBASE__API_KEY'),
  authDomain: getEnv('FIREBASE__AUTH_DOMAIN'),
  projectId: getEnv('FIREBASE__PROJECT_ID'),
  storageBucket: getEnv('FIREBASE__STORAGE_BUCKET'),
  messagingSenderId: getEnv('FIREBASE__MESSAGING_SENDER_ID'),
  appId: getEnv('FIREBASE__APP_ID')
};

export const app = initializeApp(firebaseConfig);
