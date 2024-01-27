import { clsx } from '@components/utilities/clsx';

import style from './Button.module.scss';
import { ButtonProps, IDs } from './types';

export const Button = ({ label, icon: Icon, onClick }: ButtonProps) => {
  const shouldRenderIcon = !!Icon;
  return (
    <button
      onClick={onClick}
      data-testid={IDs.Button}
      className={clsx(style.Button, {
        [style.Button__WithIcon]: shouldRenderIcon
      })}
    >
      {shouldRenderIcon && (
        <Icon data-testid={IDs.Icon} className={style.Button__Icon} />
      )}
      {label}
      {shouldRenderIcon && (
        <div data-testid={IDs.Empty} className={style.Button__Empty} />
      )}
    </button>
  );
};
