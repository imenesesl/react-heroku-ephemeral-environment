import { createContext } from 'react';

import { AuthenticationContextProps } from './types';

export const authenticationContext =
  createContext<AuthenticationContextProps>(null);
