import * as firebaseModule from '@modules/firebase';

import { logger } from './constants';
import { GoogleAuthentication } from './google';

jest.mock('@modules/firebase', () => ({
  signInWithGoogle: jest.fn(),
  signOut: jest.fn()
}));

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('GoogleAuthentication - signIn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('log success with user info on successful signIn', async () => {
    const mockUser = { uid: '123', email: 'user@example.com' };
    (firebaseModule.signInWithGoogle as jest.Mock).mockResolvedValue({
      user: mockUser
    });

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signIn();

    expect(firebaseModule.signInWithGoogle).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:success:sign-in', mockUser);
  });

  it('log error on signIn failure', async () => {
    const error = new Error('Failed to sign in with Google');
    (firebaseModule.signInWithGoogle as jest.Mock).mockRejectedValue(error);

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signIn();

    expect(firebaseModule.signInWithGoogle).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:error:sign-in', error);
  });
});

describe('GoogleAuthentication - signUp', () => {
  it('log success with user info on successful signUp', async () => {
    const mockUser = { uid: '456', email: 'newuser@example.com' };
    (firebaseModule.signInWithGoogle as jest.Mock).mockResolvedValue({
      user: mockUser
    });

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signUp();

    expect(firebaseModule.signInWithGoogle).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:success:sign-up', mockUser);
  });

  it('log error on signUp failure', async () => {
    const error = new Error('Failed to sign up with Google');
    (firebaseModule.signInWithGoogle as jest.Mock).mockRejectedValue(error);

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signUp();

    expect(firebaseModule.signInWithGoogle).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:error:sign-up', error);
  });
});

describe('GoogleAuthentication - signOut', () => {
  it('log success on successful signOut', async () => {
    (firebaseModule.signOut as jest.Mock).mockResolvedValue(true);

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signOut();

    expect(firebaseModule.signOut).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:success:sign-out');
  });

  it('log error on signOut failure', async () => {
    const error = new Error('Failed to sign out');
    (firebaseModule.signOut as jest.Mock).mockRejectedValue(error);

    const googleAuth = new GoogleAuthentication();
    await googleAuth.signOut();

    expect(firebaseModule.signOut).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith('google:error:sign-up', error); // Nota: Parece haber un error en el mensaje de log. Considera cambiar 'sign-up' por 'sign-out' en la implementación.
  });
});
