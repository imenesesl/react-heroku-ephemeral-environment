import { FC } from 'react';

import { SVGIconProps } from '@components/icons/types';

export type ButtonProps = {
  label: string;
  icon?: FC<SVGIconProps>;
};
