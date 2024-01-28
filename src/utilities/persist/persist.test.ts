import { persist } from '.';
import { logger, UTILITY_NAME } from './constants';

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('persist utility', () => {
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
    const { set, get } = persist();
    const testKey = 'testKey';
    const testData = { a: 1 };

    set(testKey, testData);

    expect(get(testKey)).toEqual(testData);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      `${UTILITY_NAME}:${testKey}`,
      JSON.stringify(testData)
    );
  });

  it('return null for non-existent keys', () => {
    const { get } = persist();
    const testKey = 'nonExistentKey';
    expect(get(testKey)).toBeNull();
  });

  it('not store undefined or null values', () => {
    const { set, get } = persist();
    set('undefinedKey', undefined);
    expect(get('undefinedKey')).toBeNull();
    set('nullKey', null);
    expect(get('nullKey')).toBeNull();
  });

  it('handle storage errors gracefully', () => {
    const { set, get } = persist();
    jest.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new Error('Storage failure');
    });
    jest.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new Error('Storage failure');
    });
    expect(() => set('errorKey', { b: 2 })).not.toThrow();
    expect(logger.log).toHaveBeenCalledWith('set:error', expect.any(Error));
    expect(() => get('errorKey')).not.toThrow();
    expect(logger.log).toHaveBeenCalledWith('get:error', expect.any(Error));
  });

  it('verifies that non-serializable values are not stored', () => {
    const { set, get } = persist();
    const testFunction = () => {};
    set('functionKey', testFunction);
    expect(get('functionKey')).toBeNull();
  });

  it('ensure key prefixing works correctly', () => {
    const { set } = persist();
    const testKey = 'prefixedKey';
    const testData = { c: 3 };

    set(testKey, testData);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      `${UTILITY_NAME}:${testKey}`,
      JSON.stringify(testData)
    );
  });
});
