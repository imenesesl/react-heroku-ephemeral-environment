import { Authentication } from './authentication';
import { logger } from './constants';
import { AuthenticationFactory } from './factory';
import { GoogleAuthentication } from './google';
import { ProviderTypes } from './types';

jest.mock('./authentication', () => ({
  Authentication: jest.fn()
}));

jest.mock('./google', () => ({
  GoogleAuthentication: jest.fn().mockImplementation(() => ({
    signIn: jest.fn(),
    signOut: jest.fn(),
    signUp: jest.fn()
  }))
}));

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('AuthenticationFactory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create an Authentication instance with GoogleAuthentication for "google" provider', () => {
    const engine = AuthenticationFactory.create('google');

    expect(GoogleAuthentication).toHaveBeenCalled();
    expect(Authentication).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith('factory:success', 'google');
    expect(engine).toBeInstanceOf(Authentication);
  });
});

it('log an error and not create an Authentication instance for unsupported providers', () => {
  const engine = AuthenticationFactory.create(
    'unsupportedProvider' as ProviderTypes
  );

  expect(logger.log).toHaveBeenCalledWith(
    expect.stringContaining('factory:error'),
    expect.stringContaining('unsupportedProvider'),
    expect.any(Error)
  );
  expect(engine).toBeUndefined();
});
