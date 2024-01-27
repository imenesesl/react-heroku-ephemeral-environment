import { render } from '@testing-library/react';

import { SignInSignUp } from '@features/sign-in-sign-up';

import { SignIn } from './SignIn';

jest.mock('@core/hooks', () => ({
  useGoogleAuthProvider: jest.fn().mockReturnValue({
    signInLabel: 'Sign in with Google',
    signIn: jest.fn()
  }),
  useFacebookAuthProvider: jest.fn().mockReturnValue({
    signInLabel: 'Sign in with Facebook',
    signIn: jest.fn()
  })
}));

jest.mock('@modules/i18n', () => ({
  useI18n: jest.fn().mockReturnValue({
    tr: jest.fn().mockImplementation((key) => key)
  })
}));

jest.mock('@features/sign-in-sign-up', () => ({
  SignInSignUp: jest.fn().mockReturnValue(null)
}));

describe('SignIn', () => {
  it('should pass the correct props to SignInFeature', () => {
    render(<SignIn />);

    expect(SignInSignUp).toHaveBeenCalledWith(
      expect.objectContaining({
        middleSection: expect.objectContaining({
          ctaAnnouncementLabel: 'auth:sign-in:cta-announcement-label',
          ctaLabel: 'auth:sign-in:cta-label',
          ctaLink: '/signup',
          googleLabel: 'Sign in with Google',
          facebookLabel: 'Sign in with Facebook',
          onSignInSignUpWithFacebook: expect.any(Function),
          onSignInSignUpWithGoogle: expect.any(Function)
        })
      }),
      expect.anything()
    );
  });
});
