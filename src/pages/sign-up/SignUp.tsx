import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignUp = () => {
  return (
    <SignInFeature
      ctaAnnouncementLabel="Already have an account?"
      ctaLabel="Sign in"
      ctaLink=""
      googleLabel="Sign up with Google"
      facebookLabel="Sign up with Facebook"
    />
  );
};
