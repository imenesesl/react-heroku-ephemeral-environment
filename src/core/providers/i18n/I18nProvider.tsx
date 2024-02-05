import { PropsWithChildren } from 'react';

import { records } from '@locales/records';
import { I18nProvider as I18nP } from '@modules/i18n';

export const I18nProvider = ({ children }: PropsWithChildren) => (
  <I18nP records={records}>{children}</I18nP>
);
