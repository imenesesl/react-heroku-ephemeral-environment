import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '.';

class ComponentWithError extends React.Component {
  render() {
    throw new Error('Test Error');
    return <></>;
  }
}

describe('ErrorBoundary', () => {
  beforeAll(() => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('catches error and displays fallback UI', () => {
    render(
      <ErrorBoundary id="test-error-boundary">
        <ComponentWithError />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });
});
