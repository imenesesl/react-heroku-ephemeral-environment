import { Auth, getAuth, signInWithPopup } from 'firebase/auth';

import { signInWithGoogle } from './google';

jest.mock('../firebase', () => ({
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  projectId: 'projectId',
  storageBucket: 'storageBucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId'
}));

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  getAuth: jest.fn(),
  signInWithPopup: jest.fn()
}));

describe('signInWithGoogle', () => {
  it('calls signInWithPopup with the correct arguments', async () => {
    const mockAuth = {} as Auth;
    (getAuth as jest.Mock).mockReturnValue(mockAuth);

    await signInWithGoogle();

    expect(signInWithPopup).toHaveBeenCalled();
  });
});
