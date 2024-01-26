import { FC } from 'react';

import FacebookIcon from '@assets/Facebook.svg?react';
import GoogleIcon from '@assets/Google.svg?react';

import { SVGIconProps } from './types';

export const Google = GoogleIcon as unknown as FC<SVGIconProps>;
export const Facebook = FacebookIcon as unknown as FC<SVGIconProps>;
