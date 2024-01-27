import { FileRoutesByPath } from '@tanstack/react-router';

import { useFacebookAuthProvider, useGoogleAuthProvider } from '@core/hooks';
import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';
import { useI18n } from '@modules/i18n';

export const SignUp = () => {
  const google = useGoogleAuthProvider();
  const facebook = useFacebookAuthProvider();
  const { tr } = useI18n();

  return (
    <SignInFeature<keyof FileRoutesByPath>
      middleSection={{
        ctaAnnouncementLabel: tr('auth:sign-up:cta-announcement-label'),
        ctaLabel: tr('auth:sign-up:cta-label'),
        ctaLink: '/signin',
        googleLabel: google.signUpLabel,
        facebookLabel: facebook.signUpLabel,
        onSignInSignUpWithFacebook: facebook.signUp,
        onSignInSignUpWithGoogle: google.signUp
      }}
    />
  );
};
