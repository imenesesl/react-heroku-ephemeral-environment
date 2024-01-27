import { cleanup, render } from '@testing-library/react';

import { I18nProvider } from '.';
import { useI18n } from './useI18n';

const TestComponent = () => {
  const i18n = useI18n();
  return <div>{i18n.tr('key')}</div>;
};

describe('useI18n Hook', () => {
  afterEach(cleanup);

  it('return key as default value in I18nProvider', () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('key')).toBeInTheDocument();
  });

  it('use I18n instance correctly when wrapped in I18nProvider', () => {
    const testRecords = { en: { key: 'Test Value' } };

    const { getByText } = render(
      <I18nProvider records={testRecords}>
        <TestComponent />
      </I18nProvider>
    );

    expect(getByText('Test Value')).toBeInTheDocument();
  });
});
