import { useNavigate } from '@tanstack/react-router';

import { Button } from '@components/button';
import { Facebook, Google } from '@components/icons';

import style from './SignInSignUp.module.scss';
import { MiddleSectionProps } from './types';

export const MiddleSection = ({
  ctaAnnouncementLabel,
  ctaLabel,
  ctaLink,
  facebookLabel,
  googleLabel,
  onSignInSignUpWithGoogle,
  onSignInSignUpWithFacebook
}: MiddleSectionProps) => {
  const navigate = useNavigate();
  return (
    <section className={style.SignInSignUp__MiddleSection}>
      <Button
        onClick={onSignInSignUpWithGoogle}
        icon={Google}
        label={googleLabel}
      />
      <Button
        onClick={onSignInSignUpWithFacebook}
        icon={Facebook}
        label={facebookLabel}
      />
      <p className={style.SignInSignUp__MiddleSection__Announcement}>
        {ctaAnnouncementLabel}
        <a
          onClick={(event) => {
            event.preventDefault();
            navigate({ to: ctaLink });
          }}
          className={style.SignInSignUp__MiddleSection__Announcement__CTA}
          type="button"
          href={ctaLink}
        >
          {ctaLabel}
        </a>
      </p>
    </section>
  );
};
