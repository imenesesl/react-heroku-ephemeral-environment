import { render, screen } from '@testing-library/react';
import { IF } from '.';

describe('IF Component', () => {
  it('renders children when condition is true', () => {
    render(<IF condition={true} element={() => <div>Child Component</div>} />);
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('does not render children when condition is false', () => {
    render(<IF condition={false} element={() => <div>Child Component</div>} />);
    expect(screen.queryByText('Child Component')).toBeNull();
  });
});
