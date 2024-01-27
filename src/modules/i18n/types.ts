export type JsonRecord = Record<string, string | undefined>;

export type I18nContextProps = Record<string, JsonRecord | string | undefined>;

export type I18nProviderProps = {
  records: I18nContextProps;
};

export type I18nMethods = {
  tr: (key: string, args?: JsonRecord) => string;
};
