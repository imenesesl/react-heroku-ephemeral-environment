import { render } from '@testing-library/react';

import { App } from './App';
import React from 'react';

jest.mock('@components/scaffold', () => ({
  Scaffold: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

test('renders the App component', () => {
  const { getByText } = render(<App />);

  const emptyTemplateText = getByText('Empty template');
  expect(emptyTemplateText).toBeInTheDocument();
});
