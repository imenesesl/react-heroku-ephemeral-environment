import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignUp = () => {
  return (
    <SignInFeature
      middleSection={{
        ctaAnnouncementLabel: 'Already have an account?',
        ctaLabel: 'Sign in',
        ctaLink: '/signin',
        googleLabel: 'Sign up with Google',
        facebookLabel: 'Sign up with Facebook'
      }}
    />
  );
};
