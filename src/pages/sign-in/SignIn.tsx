import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignIn = () => {
  return (
    <SignInFeature
      middleSection={{
        ctaAnnouncementLabel: 'No account?',
        ctaLabel: 'Create one',
        ctaLink: '/signup',
        googleLabel: 'Sign in with Google',
        facebookLabel: 'Sign in with Facebook'
      }}
    />
  );
};
