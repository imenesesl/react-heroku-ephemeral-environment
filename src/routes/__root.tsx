import { Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Scaffold } from '@components/scaffold';
import { Tracker } from '@modules/tracker';

const tracker = new Tracker(import.meta.env.VITE_SEGMENT__WRITE_KEY);

export const Route = new RootRoute({
  beforeLoad: ({ cause, context, location, params, preload, search }) => {
    tracker.track({
      event: 'before-load',
      properties: { cause, context, location, params, preload, search },
      type: 'track',
      userId: 'user-id'
    });
  },
  component: () => (
    <Scaffold>
      <Outlet />
      <TanStackRouterDevtools />
    </Scaffold>
  )
});
