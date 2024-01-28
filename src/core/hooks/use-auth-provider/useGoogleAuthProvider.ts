import { AuthenticationFactory } from '@modules/authentication';
import { useI18n } from '@modules/i18n';

import { useAuthCallbackHandler } from './useAuthCallbackHandler';

const engine = AuthenticationFactory.create('google');

export const useGoogleAuthProvider = () => {
  const { tr } = useI18n();
  const callbacks = useAuthCallbackHandler(engine);
  return {
    ...callbacks,
    signInLabel: tr('auth:sign-in', { provider: tr('google:name') }),
    signUpLabel: tr('auth:sign-up', { provider: tr('google:name') }),
    signOutLabel: tr('auth:sign-out', { provider: tr('google:name') })
  };
};
