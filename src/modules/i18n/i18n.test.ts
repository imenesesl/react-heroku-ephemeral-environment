import { logger } from './constants';
import { I18n } from './i18n';
import { I18nContextProps } from './types';

jest.mock('./constants', () => ({
  logger: {
    log: jest.fn()
  }
}));

const mockTranslationRecords: I18nContextProps = {
  en: {
    'header:main-label': 'My app',
    'header:customer-name': 'Welcome to {store}',
    'header:customer-student': 'Hi {std1}, {std2}'
  },
  it: 'Ciao',
  es: 'Adios {name}'
};

describe('I18n', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get translation without replacement', () => {
    const instance = new I18n('en', mockTranslationRecords);
    const value = instance.tr('header:main-label');
    expect(value).toBe('My app');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:translated',
      'header:main-label'
    );
    expect(logger.log).toHaveBeenNthCalledWith(2, 'replace:translated-no-args');
  });

  it('get translation with replacement', () => {
    const instance = new I18n('en', mockTranslationRecords);
    const value = instance.tr('header:customer-name', {
      store: 'i18n'
    });
    expect(value).toBe('Welcome to i18n');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:translated',
      'header:customer-name'
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      2,
      'replace:arg-replaced',
      'store',
      'i18n'
    );
    expect(logger.log).toHaveBeenNthCalledWith(3, 'replace:replaced:success');
  });

  it('get translation when lang is string without replacement', () => {
    const instance = new I18n('it', mockTranslationRecords);
    const value = instance.tr('key-ignored');
    expect(value).toBe('Ciao');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:translated',
      'key-ignored'
    );
    expect(logger.log).toHaveBeenNthCalledWith(2, 'replace:translated-no-args');
  });

  it('get translation when lang is string with replacement', () => {
    const instance = new I18n('es', mockTranslationRecords);
    const value = instance.tr('key-ignored', {
      name: 'i18n'
    });
    expect(value).toBe('Adios i18n');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:translated',
      'key-ignored'
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      2,
      'replace:arg-replaced',
      'name',
      'i18n'
    );
    expect(logger.log).toHaveBeenNthCalledWith(3, 'replace:replaced:success');
  });

  it('get key when lang does not exist', () => {
    const instance = new I18n('en', {});
    const value = instance.tr('header:main-label');
    expect(value).toBe('header:main-label');
    expect(logger.log).toHaveBeenCalledWith('tr:lang-not-provided', 'en');
  });

  it('get key when key does not exist', () => {
    const instance = new I18n('en', mockTranslationRecords);
    const value = instance.tr('header:customer-number');
    expect(value).toBe('header:customer-number');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:key-not-provided',
      'en',
      'header:customer-number'
    );
  });

  it('get default translation when the keys are undefined', () => {
    const instance = new I18n('en', mockTranslationRecords);
    const value = instance.tr('header:customer-student', {
      std1: undefined,
      std2: undefined
    });
    expect(value).toBe('Hi {std1}, {std2}');
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'tr:translated',
      'header:customer-student'
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      2,
      'replace:not-valid-replacement',
      'std1',
      undefined
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      3,
      'replace:not-valid-replacement',
      'std2',
      undefined
    );
    expect(logger.log).toHaveBeenNthCalledWith(4, 'replace:replaced:success');
  });
});
