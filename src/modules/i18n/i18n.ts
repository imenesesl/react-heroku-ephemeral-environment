import { logger } from './constants';
import { I18nContextProps, I18nMethods, JsonRecord } from './types';

export class I18n implements I18nMethods {
  private records: I18nContextProps = {};
  private lang: string;
  constructor(lang: string, records: I18nContextProps) {
    this.lang = lang;
    this.records = records;
  }

  tr = (key: string, args?: JsonRecord) => {
    const langRecord = this.records[this.lang];
    if (!langRecord) {
      logger.log('tr:lang-not-provided', this.lang);
      return key;
    }
    if (typeof langRecord === 'string') {
      logger.log('tr:translated', key);
      return this.replace(langRecord, args);
    }
    const value = langRecord?.[key];
    if (!value) {
      logger.log('tr:key-not-provided', this.lang, key);
      return key;
    }
    logger.log('tr:translated', key);
    return this.replace(value, args);
  };
  private replace = (value: string, args?: JsonRecord) => {
    if (!args) {
      logger.log('replace:translated-no-args');
      return value;
    }
    let replaceValue = value;
    Object.entries(args).map(([key, replacement]) => {
      if (replacement) {
        logger.log('replace:arg-replaced', key, replacement);
        replaceValue = replaceValue.replace(`{${key}}`, replacement);
      } else {
        logger.log('replace:not-valid-replacement', key, replacement);
      }
    }, value);
    logger.log('replace:replaced:success');
    return replaceValue;
  };
}
