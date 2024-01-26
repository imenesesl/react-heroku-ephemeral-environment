import { clsx } from '@components/utilities/clsx';

import style from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = ({ label, icon: Icon }: ButtonProps) => {
  const shouldRenderIcon = !!Icon;
  return (
    <button
      className={clsx(style.Button, {
        [style.Button__WithIcon]: shouldRenderIcon
      })}
    >
      {shouldRenderIcon && <Icon className={style.Button__Icon} />}
      {label}
      {shouldRenderIcon && <div className={style.Button__Empty} />}
    </button>
  );
};
