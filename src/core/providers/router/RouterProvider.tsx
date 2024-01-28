import {
  createRouter,
  RouterProvider as RouterP
} from '@tanstack/react-router';

import { useAuthentication } from '@core/providers/authentication';
import { routeTree } from '@root/routeTree.gen';

const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const auth = useAuthentication();
  return <RouterP router={router} context={{ auth }} />;
};
