import { PropsWithChildren, useContext } from 'react';

import { render } from '@testing-library/react';

import { i18nContext } from './context';

const TestComponent = () => {
  const context = useContext(i18nContext);
  return <div>{JSON.stringify(context)}</div>;
};

describe('i18nContext', () => {
  it('provide an empty object as default value', () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('{}')).toBeInTheDocument();
  });

  it('provide the correct data when value is provided', () => {
    const testRecords = { en: { header: 'My Header' } };

    const TestProvider = ({ children }: PropsWithChildren) => (
      <i18nContext.Provider value={testRecords}>
        {children}
      </i18nContext.Provider>
    );

    const { getByText } = render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    );

    expect(getByText(JSON.stringify(testRecords))).toBeInTheDocument();
  });
});
