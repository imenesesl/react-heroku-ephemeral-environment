import { Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { getEnv } from '@utilities/get-env';

import { Logger } from '@modules/logger';
import { Tracker } from '@modules/tracker';
import { ICallbackArgs } from '@modules/tracker/types';

const tracker = new Tracker(getEnv('SEGMENT__WRITE_KEY'));
const logger = new Logger('@Root');

export const Route = new RootRoute({
  beforeLoad: ({ cause, context, location, params, preload, search }) => {
    const payload: ICallbackArgs = {
      event: 'before-load',
      properties: { cause, context, location, params, preload, search },
      type: 'track',
      userId: 'user-id'
    };
    if (getEnv('NODE_ENV', { isGlobal: true })) tracker.track(payload);
    else logger.log('before-load', payload);
  },
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
});
