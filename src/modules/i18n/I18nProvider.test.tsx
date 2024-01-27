import { render } from '@testing-library/react';

import { i18nContext } from './context';
import { I18nProvider } from './I18nProvider';

const DATA_TEST_ID = 'context-value';

const TestConsumer = () => {
  return (
    <i18nContext.Consumer>
      {(value) => <div data-testid={DATA_TEST_ID}>{JSON.stringify(value)}</div>}
    </i18nContext.Consumer>
  );
};

describe('I18nProvider', () => {
  it('should provide the context values to its children', () => {
    const testRecords = { en: { header: 'My Header' } };

    const { getByTestId } = render(
      <I18nProvider records={testRecords}>
        <TestConsumer />
      </I18nProvider>
    );

    const contextValue = getByTestId(DATA_TEST_ID).textContent;
    expect(contextValue).toEqual(JSON.stringify(testRecords));
  });

  it('should provide an empty object when no records are provided', () => {
    const { getByTestId } = render(
      <I18nProvider records={{}}>
        <TestConsumer />
      </I18nProvider>
    );

    const contextValue = getByTestId(DATA_TEST_ID).textContent;
    expect(contextValue).toEqual('{}');
  });
});
