import { useFacebookAuthProvider, useGoogleAuthProvider } from '@core/hooks';
import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignUp = () => {
  const google = useGoogleAuthProvider();
  const facebook = useFacebookAuthProvider();
  return (
    <SignInFeature
      middleSection={{
        ctaAnnouncementLabel: 'Already have an account?',
        ctaLabel: 'Sign in',
        ctaLink: '/signin',
        googleLabel: google.signUpLabel,
        facebookLabel: facebook.signUpLabel,
        onSignInSignUpWithFacebook: facebook.signUp,
        onSignInSignUpWithGoogle: google.signUp
      }}
    />
  );
};
