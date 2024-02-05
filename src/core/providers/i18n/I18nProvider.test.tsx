import { PropsWithChildren } from 'react';

import { render, screen } from '@testing-library/react';

import { records } from '@locales/records';

import { I18nProvider } from './I18nProvider';

jest.mock('@modules/i18n', () => ({
  I18nProvider: ({
    children,
    records
  }: PropsWithChildren<{ records: Record<string, string> }>) => (
    <div data-testid="mock-i18np" data-records={JSON.stringify(records)}>
      {children}
    </div>
  )
}));

describe('I18nProvider', () => {
  it('renders children and passes records to I18nProvider', () => {
    const testMessage = 'Test Message';
    render(
      <I18nProvider>
        <div>{testMessage}</div>
      </I18nProvider>
    );

    const mockI18np = screen.getByTestId('mock-i18np');
    expect(mockI18np).toHaveAttribute('data-records', JSON.stringify(records));

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
