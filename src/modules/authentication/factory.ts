import { Authentication } from './authentication';
import { logger } from './constants';
import { GoogleAuthentication } from './google';
import { AuthMethods, ProviderTypes } from './types';

export class AuthenticationFactory {
  static create(providerName: ProviderTypes) {
    try {
      let provider: AuthMethods;
      if (providerName === 'google') {
        provider = new GoogleAuthentication();
      } else provider = null as unknown as AuthMethods;

      if (!provider) {
        throw new Error(`Provider not found: ${providerName}`);
      }

      logger.log('factory:success', providerName);
      const engine = new Authentication(provider);
      return engine;
    } catch (error) {
      logger.log('factory:error', providerName, error);
    }
  }
}
