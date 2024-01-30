import { Persist } from '.';
import { logger, UTILITY_NAME } from './constants';

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('Persist', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    let store: Record<string, string> = {};

    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest
      .fn()
      .mockImplementation((key) => store[key] || null);

    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn().mockImplementation((key, value) => {
      store[key] = value.toString();
    });

    window.localStorage.clear = () => {
      store = {};
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('store and retrieve a value', () => {
    const testKey = 'testKey';
    const testData = { a: 1 };

    Persist.set(testKey, testData);

    expect(Persist.get(testKey)).toEqual(testData);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      `${UTILITY_NAME}:${testKey}`,
      JSON.stringify(testData)
    );
  });

  it('return null for non-existent keys', () => {
    const testKey = 'nonExistentKey';
    expect(Persist.get(testKey)).toBeNull();
  });

  it('not store undefined or null values', () => {
    Persist.set('undefinedKey', undefined);
    expect(Persist.get('undefinedKey')).toBeNull();
    Persist.set('nullKey', null);
    expect(Persist.get('nullKey')).toBeNull();
  });

  it('handle storage errors gracefully', () => {
    jest.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new Error('Storage failure');
    });
    jest.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new Error('Storage failure');
    });
    expect(() => Persist.set('errorKey', { b: 2 })).not.toThrow();
    expect(logger.log).toHaveBeenCalledWith('set:error', expect.any(Error));
    expect(() => Persist.get('errorKey')).not.toThrow();
    expect(logger.log).toHaveBeenCalledWith('get:error', expect.any(Error));
  });

  it('verifies that non-serializable values are not stored', () => {
    const testFunction = () => {};
    Persist.set('functionKey', testFunction);
    expect(Persist.get('functionKey')).toBeNull();
  });

  it('ensure key prefixing works correctly', () => {
    const testKey = 'prefixedKey';
    const testData = { c: 3 };

    Persist.set(testKey, testData);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      `${UTILITY_NAME}:${testKey}`,
      JSON.stringify(testData)
    );
  });
});
