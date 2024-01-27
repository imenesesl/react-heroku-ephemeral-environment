import { useContext } from 'react';

import { i18nContext } from './context';
import { I18n } from './i18n';

export const useI18n = () => {
  const records = useContext(i18nContext);
  const instance = new I18n('en', records);
  return instance;
};
