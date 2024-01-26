import { fireEvent, render, screen } from '@testing-library/react';

import { MockIcon } from '@mocks/Icon';

import { MiddleSection } from './MiddleSection';
import { MiddleSectionProps } from './types';

jest.mock('@components/icons', () => ({
  Facebook: MockIcon,
  Google: MockIcon
}));

describe('MiddleSection', () => {
  const props: MiddleSectionProps = {
    ctaAnnouncementLabel: 'Do you need help?',
    ctaLabel: 'Click here!',
    ctaLink: '/my-page',
    facebookLabel: 'Facebook Label',
    googleLabel: 'Google Label'
  };

  it('render icon buttons with its own label', () => {
    render(<MiddleSection {...props} />);

    const [google, facebook] = screen.getAllByRole('button');
    const icons = screen.getAllByText('Icon');

    expect(google).toHaveTextContent(props.googleLabel);
    expect(facebook).toHaveTextContent(props.facebookLabel);
    expect(icons.length).toBe(2);
  });

  it('render link', () => {
    render(<MiddleSection {...props} />);

    const anchor = screen.getByText(props.ctaLabel);
    const announcement = screen.getByText(props.ctaAnnouncementLabel);

    expect(announcement).toBeInTheDocument();
    expect(anchor).toHaveTextContent(props.ctaLabel);
    expect(anchor).toHaveAttribute('href', props.ctaLink);
  });

  it('link prevent onClick', () => {
    render(<MiddleSection {...props} />);

    const anchor = screen.getByText(props.ctaLabel);
    anchor.onclick = jest.fn((event) => event.preventDefault());
    fireEvent.click(anchor);

    expect(anchor.onclick).toHaveBeenCalled();
  });
});
