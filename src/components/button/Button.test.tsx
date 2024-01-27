import { render, screen } from '@testing-library/react';

import { MockIcon } from '@mocks/Icon';

import { Button } from './Button';
import { IDs } from './types';

jest.mock('@components/utilities/clsx', () => ({ clsx: jest.fn() }));

describe('Button', () => {
  it('renders the button with the provided label', () => {
    const label = 'Click Me';
    render(<Button label={label} />);

    expect(screen.getByRole('button')).toHaveTextContent(label);
  });

  it('renders an icon when provided', () => {
    render(<Button icon={MockIcon} label="Button with Icon" />);

    expect(screen.getByTestId(IDs.Icon)).toBeInTheDocument();
    expect(screen.getByTestId(IDs.Empty)).toBeInTheDocument();
  });
});
