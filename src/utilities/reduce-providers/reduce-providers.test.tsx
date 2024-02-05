import React, { PropsWithChildren, useContext } from 'react';

import { render, screen } from '@testing-library/react';

import { reduceProviders } from './reduce-providers';

// Create two mock context providers for testing
const FirstContext = React.createContext<string | null>(null);
const SecondContext = React.createContext<string | null>(null);

const FirstProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <FirstContext.Provider value="First">{children}</FirstContext.Provider>
);

const SecondProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <SecondContext.Provider value="Second">{children}</SecondContext.Provider>
);

const ConsumerComponent: React.FC = () => {
  const firstValue = useContext(FirstContext);
  const secondValue = useContext(SecondContext);
  return (
    <div>
      First Context Value: {firstValue}, Second Context Value: {secondValue}
    </div>
  );
};

describe('reduceProviders', () => {
  it('correctly nests multiple context providers', () => {
    const ComposedProviders = reduceProviders(FirstProvider, SecondProvider);
    render(
      <ComposedProviders>
        <ConsumerComponent />
      </ComposedProviders>
    );

    expect(
      screen.getByText(
        /First Context Value: First, Second Context Value: Second/
      )
    ).toBeInTheDocument();
  });

  it('renders children correctly without any providers', () => {
    const ComposedProviders = reduceProviders();
    render(
      <ComposedProviders>
        <div>Test Content</div>
      </ComposedProviders>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
