import { PropsWithChildren, useEffect, useState } from 'react';

import { onAuthStateChanged } from '@modules/firebase';
import { persist } from '@utilities/persist';

import { authenticationContext } from './context';
import { AuthenticationContextProps } from './types';

const { set, get } = persist();

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const userCached = get('user');
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
        set('user', newUser);
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
