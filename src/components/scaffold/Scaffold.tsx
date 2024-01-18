import style from './Scaffold.module.scss';
import { ScaffoldProps } from './types';

export const Scaffold = ({ children }: ScaffoldProps) => {
  return (
    <div className={style.Scaffold}>
      <header className={style.Scaffold__Header}>HEADER</header>
      <div className={style.Scaffold__Children}>{children}</div>
      <footer className={style.Scaffold__Footer}>FOOTER</footer>
    </div>
  );
};
