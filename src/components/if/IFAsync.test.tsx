import { FC } from 'react';

import { render, screen } from '@testing-library/react';

import { IFAsync } from '.';

type MockComponentProps = { label: string };
const MockComponent: FC<MockComponentProps> = ({ label }) => <div>{label}</div>;

describe('IFAsync', () => {
  it('renders loading state', () => {
    render(
      <IFAsync
        element={MockComponent}
        data={{} as MockComponentProps}
        loading={true}
        error={null}
      />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const error = new Error('Test Error');
    render(
      <IFAsync
        element={MockComponent}
        data={{} as MockComponentProps}
        loading={false}
        error={error}
      />
    );
    expect(screen.getByText(`Error: ${error.message}`)).toBeInTheDocument();
  });

  it('renders element when data is provided and there is no loading or error', () => {
    render(
      <IFAsync
        element={MockComponent}
        data={{ label: 'Test Data' }}
        loading={false}
        error={null}
      />
    );
    expect(screen.getByText('Test Data')).toBeInTheDocument();
  });
});
