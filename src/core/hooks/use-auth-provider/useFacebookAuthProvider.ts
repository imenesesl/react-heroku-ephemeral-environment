import { AuthenticationFactory } from '@modules/authentication';
import { useI18n } from '@modules/i18n';

const engine = AuthenticationFactory.create('facebook');

export const useFacebookAuthProvider = () => {
  const { tr } = useI18n();
  return {
    ...engine,
    signInLabel: tr('auth:sign-in', { provider: tr('facebook:name') }),
    signUpLabel: tr('auth:sign-up', { provider: tr('facebook:name') }),
    signOutLabel: tr('auth:sign-out', { provider: tr('facebook:name') })
  };
};
