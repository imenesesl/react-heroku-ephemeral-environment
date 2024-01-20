import { Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Scaffold } from '@components/scaffold';
import { Logger } from '@modules/logger';
import { Tracker } from '@modules/tracker';
import { ICallbackArgs } from '@modules/tracker/types';

const tracker = new Tracker(import.meta.env.VITE_SEGMENT__WRITE_KEY);
const logger = new Logger('@Root');

export const Route = new RootRoute({
  beforeLoad: ({ cause, context, location, params, preload, search }) => {
    const payload: ICallbackArgs = {
      event: 'before-load',
      properties: { cause, context, location, params, preload, search },
      type: 'track',
      userId: 'user-id'
    };
    if (import.meta.env.PROD) tracker.track(payload);
    else logger.log('before-load', payload);
  },
  component: () => (
    <Scaffold>
      <Outlet />
      <TanStackRouterDevtools />
    </Scaffold>
  )
});
