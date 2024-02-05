import { I18nProvider } from '@core/providers/i18n';
import { reduceProviders } from '@utilities/reduce-providers';

export const AppStoriesProvider = reduceProviders(I18nProvider);
