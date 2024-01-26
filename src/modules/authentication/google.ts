import { signInWithGoogle, signOut } from '@modules/firebase';

import { logger } from './constants';
import { AuthMethods } from './types';

export class GoogleAuthentication implements AuthMethods {
  constructor() {}
  signIn = async () => {
    try {
      const result = await signInWithGoogle();
      logger.log('google:success:sign-in', result.user);
    } catch (error) {
      logger.log('google:error:sign-in', error);
    }
  };

  signUp = async () => {
    try {
      await this.signIn();
      logger.log('google:success:sign-up');
    } catch (error) {
      logger.log('google:error:sign-up', error);
    }
  };

  signOut = async () => {
    try {
      await signOut();
      logger.log('google:success:sign-out');
    } catch (error) {
      logger.log('google:error:sign-up', error);
    }
  };
}
