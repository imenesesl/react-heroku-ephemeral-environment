import { renderHook } from '@testing-library/react-hooks';

import { useGoogleAuthProvider } from './useGoogleAuthProvider';

jest.mock('@modules/authentication', () => ({
  AuthenticationFactory: {
    create: jest.fn().mockReturnValue({
      signIn: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn()
    })
  }
}));

jest.mock('./useAuthCallbackHandler', () => ({
  useAuthCallbackHandler: jest.fn().mockReturnValue({
    signIn: jest.fn(),
    signUp: jest.fn(),
    signOut: jest.fn()
  })
}));

jest.mock('@modules/i18n', () => ({
  useI18n: jest.fn().mockReturnValue({
    tr: jest.fn(
      (key, args = 'no-args') => `${key} with ${JSON.stringify(args)}`
    )
  })
}));

describe('useGoogleAuthProvider', () => {
  it('return translated labels for signIn, signUp, and signOut', () => {
    const { result } = renderHook(() => useGoogleAuthProvider());

    expect(result.current.signInLabel).toBe(
      'auth:sign-in with {"provider":"google:name with \\"no-args\\""}'
    );
    expect(result.current.signUpLabel).toBe(
      'auth:sign-up with {"provider":"google:name with \\"no-args\\""}'
    );
    expect(result.current.signOutLabel).toBe(
      'auth:sign-out with {"provider":"google:name with \\"no-args\\""}'
    );
  });

  it('retain the signIn, signUp, and signOut functionalities from the engine', () => {
    const { result } = renderHook(() => useGoogleAuthProvider());

    expect(result.current.signIn).toBeDefined();
    expect(result.current.signUp).toBeDefined();
    expect(result.current.signOut).toBeDefined();

    expect(() => result.current.signIn?.()).not.toThrow();
    expect(() => result.current.signUp?.()).not.toThrow();
    expect(() => result.current.signOut?.()).not.toThrow();
  });
});
