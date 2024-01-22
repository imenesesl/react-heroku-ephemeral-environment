import { render } from '@testing-library/react';

import { Scaffold } from './Scaffold';
import { IDs } from './types';

test('renders the Scaffold component with header, children, and footer', () => {
  const { getByTestId } = render(<Scaffold>Content</Scaffold>);

  const scaffoldElement = getByTestId(IDs.Scaffold);
  const headerElement = getByTestId(IDs.Header);
  const childrenElement = getByTestId(IDs.Children);
  const footerElement = getByTestId(IDs.Footer);

  expect(scaffoldElement).toBeInTheDocument();
  expect(headerElement).toBeInTheDocument();
  expect(childrenElement).toHaveTextContent('Content');
  expect(footerElement).toBeInTheDocument();
});
