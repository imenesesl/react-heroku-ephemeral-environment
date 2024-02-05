import { AuthenticationProvider } from '@core/providers/authentication';
import { I18nProvider } from '@core/providers/i18n';
import { reduceProviders } from '@utilities/reduce-providers';

export const AppProvider = reduceProviders(
  I18nProvider,
  AuthenticationProvider
);
