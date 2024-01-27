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
    if (!langRecord) return key;
    if (typeof langRecord === 'string') return this.replace(langRecord, args);
    const value = langRecord?.[key];
    if (!value) return key;
    return this.replace(value, args);
  };
  private replace = (value: string, args?: JsonRecord) => {
    if (!args) return value;
    let replaceValue = value;
    Object.entries(args).map(([key, replacement]) => {
      if (replacement) {
        replaceValue = replaceValue.replace(`{${key}}`, replacement);
      }
    }, value);
    return replaceValue;
  };
}
