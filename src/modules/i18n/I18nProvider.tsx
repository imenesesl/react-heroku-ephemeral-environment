import { PropsWithChildren } from 'react';

import { i18nContext } from './context';
import { I18nProviderProps } from './types';

export const I18nProvider = ({
  children,
  records
}: PropsWithChildren<I18nProviderProps>) => (
  <i18nContext.Provider value={records}>{children}</i18nContext.Provider>
);
