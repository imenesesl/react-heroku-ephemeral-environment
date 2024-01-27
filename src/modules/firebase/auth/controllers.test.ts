import { getAuth, onAuthStateChanged } from 'firebase/auth';

import * as authModule from './controllers';

jest.mock('../firebase', () => ({
  app: {}
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({ signOut: jest.fn() }),
  onAuthStateChanged: jest.fn()
}));

describe('Auth Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('onAuthStateChanged calls Firebase onAuthStateChanged with correct parameters', () => {
    const observer = jest.fn();

    authModule.onAuthStateChanged(observer);

    expect(onAuthStateChanged).toHaveBeenCalled();
  });

  it('signOut calls Firebase signOut', async () => {
    const mockSignOut = jest.fn();

    (getAuth as jest.Mock).mockReturnValue({ signOut: mockSignOut });

    await authModule.signOut();

    expect(authModule.signOut).toHaveBeenCalled();
  });
});
