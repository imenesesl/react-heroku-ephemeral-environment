import { getEnv } from './';
import { logger } from './utils/constants';

jest.mock('./utils/constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('getEnv', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('return the correct environment variable value', () => {
    process.env.VITE_SEGMENT__WRITE_KEY = 'abc-123-xxx';
    const result = getEnv('SEGMENT__WRITE_KEY');
    expect(result).toBe('abc-123-xxx');
  });

  it('return the correct global environment variable value', () => {
    process.env.NODE_ENV = 'testing';
    const result = getEnv('NODE_ENV', { isGlobal: true });
    expect(result).toBe('testing');
  });

  it('log and return empty string if key is not found', () => {
    const result = getEnv('NON_EXISTENT_VAR' as never);
    expect(result).toBe('');
    expect(logger.log).toHaveBeenCalledWith('key-not-found', {
      key: 'NON_EXISTENT_VAR',
      isGlobal: false
    });
  });
});
