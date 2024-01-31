import { PropsWithChildren, useEffect, useState } from 'react';

import { onAuthStateChanged } from '@modules/firebase';
import { Persist } from '@utilities/persist';

import { authenticationContext } from './context';
import { AuthenticationContextProps } from './types';

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const userCached = Persist.get<AuthenticationContextProps>('user');
  const [user, seUser] = useState<AuthenticationContextProps>(userCached);

  useEffect(() => {
    const subscription = onAuthStateChanged((userInstance) => {
      if (!userInstance) {
        seUser(null);
      } else {
        const { uid, displayName } = userInstance;
        const name = displayName ?? '';
        const newUser = { name, uid };
        seUser(newUser);
        Persist.set('user', newUser);
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
