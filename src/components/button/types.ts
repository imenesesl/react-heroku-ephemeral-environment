import { FC } from 'react';

import { SVGIconProps } from '@components/icons/types';

export enum IDs {
  Button = 'Button__Button',
  Icon = 'Button__Icon',
  Empty = 'Button__Empty'
}

export type ButtonProps = {
  label: string;
  icon?: FC<SVGIconProps>;
  onClick?: () => Promise<void>;
};
