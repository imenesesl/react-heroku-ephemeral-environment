import { Button } from '@components/button';
import { Facebook, Google } from '@components/icons';

import style from './SignInSignUp.module.scss';

export type SignInSignUpProps = {
  googleLabel: string;
  facebookLabel: string;
  ctaAnnouncementLabel: string;
  ctaLabel: string;
  ctaLink: string;
};

export const SignInSignUp = ({
  ctaAnnouncementLabel,
  ctaLabel,
  ctaLink,
  facebookLabel,
  googleLabel
}: SignInSignUpProps) => {
  return (
    <div className={style.SignInSignUp}>
      <section className={style.SignInSignUp__TopSection}>Top</section>
      <section className={style.SignInSignUp__MiddleSection}>
        <Button icon={Google} label={googleLabel} />
        <Button icon={Facebook} label={facebookLabel} />
        <p className={style.SignInSignUp__MiddleSection__Announcement}>
          {ctaAnnouncementLabel}
          <a
            className={style.SignInSignUp__MiddleSection__Announcement__CTA}
            type="button"
            href={ctaLink}
          >
            {ctaLabel}
          </a>
        </p>
      </section>
      <section className={style.SignInSignUp__BottomSection}>Bottom</section>
    </div>
  );
};
