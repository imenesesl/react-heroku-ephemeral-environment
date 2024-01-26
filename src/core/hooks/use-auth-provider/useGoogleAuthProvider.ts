import { AuthenticationFactory } from '@modules/authentication';

const engine = AuthenticationFactory.create('google');

export const useGoogleAuthProvider = () => {
  return {
    ...engine,
    signInLabel: 'Sign in with Google',
    signUpLabel: 'Sign up with Google',
    logOutLabel: 'Log out with Google'
  };
};
