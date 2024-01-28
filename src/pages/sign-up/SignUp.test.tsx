import { render } from '@testing-library/react';

import { SignInSignUp } from '@features/sign-in-sign-up';

import { SignUp } from './SignUp';

jest.mock('@core/hooks', () => ({
  useGoogleAuthProvider: jest.fn().mockReturnValue({
    signUpLabel: 'Sign up with Google',
    signUp: jest.fn()
  }),
  useFacebookAuthProvider: jest.fn().mockReturnValue({
    signUpLabel: 'Sign up with Facebook',
    signUp: jest.fn()
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

describe('SignUp', () => {
  it('pass the correct props to SignUpFeature', () => {
    render(<SignUp />);

    expect(SignInSignUp).toHaveBeenCalledWith(
      expect.objectContaining({
        middleSection: expect.objectContaining({
          ctaAnnouncementLabel: 'auth:sign-up:cta-announcement-label',
          ctaLabel: 'auth:sign-up:cta-label',
          ctaLink: '/signin',
          googleLabel: 'Sign up with Google',
          facebookLabel: 'Sign up with Facebook',
          onSignInSignUpWithFacebook: expect.any(Function),
          onSignInSignUpWithGoogle: expect.any(Function)
        })
      }),
      expect.anything()
    );
  });
});
