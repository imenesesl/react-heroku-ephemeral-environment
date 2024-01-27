import { redirect } from '@tanstack/react-router';

import { logger } from './constants';
import { IBeforeLoad } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const redirectBeforeLoadRequireAuthentication: any =
  (to?: string) =>
  ({ context, location }: IBeforeLoad) => {
    const REDIRECT_PATH = ['/signin', '/signup'];
    const [path] = location.href.split('?');
    if (!context.auth && !REDIRECT_PATH.includes(path)) {
      logger.log('redirect:from', location.href);
      throw redirect({
        to: '/signin',
        search: {
          redirect: location.href
        }
      });
    }
    if (context.auth && to) {
      logger.log('redirect:to', to);
      throw redirect({
        to
      });
    }
    logger.log('redirect:normal-user-flow');
  };
