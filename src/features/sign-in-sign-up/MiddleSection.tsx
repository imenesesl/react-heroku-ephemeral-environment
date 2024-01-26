import { Link } from '@tanstack/react-router';

import { Button } from '@components/button';
import { Facebook, Google } from '@components/icons';

import style from './SignInSignUp.module.scss';
import { MiddleSectionProps } from './types';

export const MiddleSection = ({
  ctaAnnouncementLabel,
  ctaLabel,
  ctaLink,
  facebookLabel,
  googleLabel
}: MiddleSectionProps) => {
  return (
    <section className={style.SignInSignUp__MiddleSection}>
      <Button icon={Google} label={googleLabel} />
      <Button icon={Facebook} label={facebookLabel} />
      <p className={style.SignInSignUp__MiddleSection__Announcement}>
        {ctaAnnouncementLabel}
        <Link
          className={style.SignInSignUp__MiddleSection__Announcement__CTA}
          type="button"
          to={ctaLink}
        >
          {ctaLabel}
        </Link>
      </p>
    </section>
  );
};
