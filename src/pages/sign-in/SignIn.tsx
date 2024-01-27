import { FileRoutesByPath } from '@tanstack/react-router';

import { useFacebookAuthProvider, useGoogleAuthProvider } from '@core/hooks';
import { SignInSignUp as SignInFeature } from '@features/sign-in-sign-up';
import { useI18n } from '@modules/i18n';

export const SignIn = () => {
  const google = useGoogleAuthProvider();
  const facebook = useFacebookAuthProvider();
  const { tr } = useI18n();

  return (
    <SignInFeature<keyof FileRoutesByPath>
      middleSection={{
        ctaAnnouncementLabel: tr('auth:sign-in:cta-announcement-label'),
        ctaLabel: tr('auth:sign-in:cta-label'),
        ctaLink: '/signup',
        googleLabel: google.signInLabel,
        facebookLabel: facebook.signInLabel,
        onSignInSignUpWithFacebook: facebook.signIn,
        onSignInSignUpWithGoogle: google.signIn
      }}
    />
  );
};
