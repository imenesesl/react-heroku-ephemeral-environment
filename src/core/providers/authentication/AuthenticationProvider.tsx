import { PropsWithChildren, useEffect, useState } from 'react';

import { onAuthStateChanged } from '@modules/firebase';

import { authenticationContext } from './context';
import { AuthenticationContextProps } from './types';

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [user, seUser] = useState<AuthenticationContextProps>(null);

  useEffect(() => {
    const subscription = onAuthStateChanged((userInstance) => {
      if (!userInstance) seUser(null);
      else {
        const { uid, displayName } = userInstance;
        const name = displayName ?? '';
        seUser({ name, uid });
      }
    });
    return () => subscription();
  }, []);

  return (
    <authenticationContext.Provider value={user}>
      {children}
    </authenticationContext.Provider>
  );
};
