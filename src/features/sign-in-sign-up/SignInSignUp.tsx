import { MiddleSection } from './MiddleSection';
import style from './SignInSignUp.module.scss';
import { SignInSignUpProps } from './types';

export const SignInSignUp = ({ middleSection }: SignInSignUpProps) => {
  return (
    <div className={style.SignInSignUp}>
      <section className={style.SignInSignUp__TopSection}>Top</section>
      <MiddleSection {...middleSection} />
      <section className={style.SignInSignUp__BottomSection}>Bottom</section>
    </div>
  );
};
