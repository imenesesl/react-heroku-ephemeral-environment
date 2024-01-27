import { render, screen } from '@testing-library/react';

import { SignInSignUp } from './SignInSignUp';
import { SignInSignUpProps } from './types';

jest.mock('./MiddleSection', () => ({
  MiddleSection: () => <div>Middle Section</div>
}));

describe('SignInSignUp', () => {
  const props: SignInSignUpProps = {
    middleSection: {
      ctaAnnouncementLabel: 'ctaAnnouncementLabel',
      ctaLabel: 'ctaLabel',
      ctaLink: 'ctaLink',
      facebookLabel: 'facebookLabel',
      googleLabel: 'googleLabel'
    }
  };

  it('render MiddleSection', () => {
    render(<SignInSignUp {...props} />);
    expect(screen.getByText('Middle Section')).toBeInTheDocument();
  });
});
