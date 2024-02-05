import { PropsWithChildren } from 'react';

import { render, screen } from '@testing-library/react';

import { AppProvider } from './AppProvider'; // Adjust the import path as necessary

jest.mock('@core/providers/i18n', () => ({
  I18nProvider: ({ children }: PropsWithChildren) => (
    <div data-testid="I18nProvider">{children}</div>
  )
}));

jest.mock('@core/providers/authentication', () => ({
  AuthenticationProvider: ({ children }: PropsWithChildren) => (
    <div data-testid="AuthenticationProvider">{children}</div>
  )
}));

describe('AppProvider', () => {
  it('renders the I18nProvider and AuthenticationProvider', () => {
    render(
      <AppProvider>
        <div>Test Content</div>
      </AppProvider>
    );

    expect(screen.getByTestId('I18nProvider')).toBeInTheDocument();
    expect(screen.getByTestId('AuthenticationProvider')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
