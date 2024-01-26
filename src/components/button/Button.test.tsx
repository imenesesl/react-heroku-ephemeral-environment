import { render, screen } from '@testing-library/react';

import { Button } from './Button';
import { IDs } from './types';

jest.mock('@components/utilities/clsx', () => ({ clsx: jest.fn() }));

describe('Button Component', () => {
  it('renders the button with the provided label', () => {
    const label = 'Click Me';
    render(<Button label={label} />);

    expect(screen.getByRole('button')).toHaveTextContent(label);
  });

  it('renders an icon when provided', () => {
    const mockIcon = () => {
      const Wrapper = (props: object) => <div {...props}>Icon</div>;
      return Wrapper;
    };
    render(<Button icon={mockIcon()} label="Button with Icon" />);

    expect(screen.getByTestId(IDs.Icon)).toBeInTheDocument();
    expect(screen.getByTestId(IDs.Empty)).toBeInTheDocument();
  });
});
