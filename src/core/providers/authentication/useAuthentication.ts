import { useContext } from 'react';

import { authenticationContext } from './context';

export const useAuthentication = () => {
  const context = useContext(authenticationContext);
  return context;
};
