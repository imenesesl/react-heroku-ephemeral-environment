import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignIn = () => {
  return (
    <SignInFeature
      ctaAnnouncementLabel="No account?"
      ctaLabel="Create one"
      ctaLink=""
      googleLabel="Sign in with Google"
      facebookLabel="Sign in with Facebook"
    />
  );
};
