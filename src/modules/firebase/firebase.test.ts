import { initializeApp } from 'firebase/app';

jest.mock('firebase/app');

jest.mock('@utilities/get-env', () => ({
  getEnv: (key = 'fake-key') => key
}));

describe('Firebase Initialization', () => {
  it('initialize Firebase with correct configuration', () => {
    require('./firebase');
    expect(initializeApp).toHaveBeenCalledWith({
      apiKey: expect.any(String),
      authDomain: expect.any(String),
      projectId: expect.any(String),
      storageBucket: expect.any(String),
      messagingSenderId: expect.any(String),
      appId: expect.any(String)
    });
  });
});
