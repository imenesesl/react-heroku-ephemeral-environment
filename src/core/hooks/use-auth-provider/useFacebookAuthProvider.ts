import { AuthenticationFactory } from '@modules/authentication';

const engine = AuthenticationFactory.create('facebook');

export const useFacebookAuthProvider = () => {
  return {
    ...engine,
    signInLabel: 'Sign in with Facebook',
    signUpLabel: 'Sign up with Facebook',
    logOutLabel: 'Log out with Facebook'
  };
};
