import { useFacebookAuthProvider, useGoogleAuthProvider } from '@core/hooks';
import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';

export const SignIn = () => {
  const google = useGoogleAuthProvider();
  const facebook = useFacebookAuthProvider();

  return (
    <SignInFeature
      middleSection={{
        ctaAnnouncementLabel: 'No account?',
        ctaLabel: 'Create one',
        ctaLink: '/signup',
        googleLabel: google.signInLabel,
        facebookLabel: facebook.signInLabel,
        onSignInSignUpWithFacebook: facebook.signIn,
        onSignInSignUpWithGoogle: google.signIn
      }}
    />
  );
};
