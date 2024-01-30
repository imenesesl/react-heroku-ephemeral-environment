import { redirect } from '@tanstack/react-router';

import { logger } from './constants';
import { IBeforeLoad } from './types';

const REDIRECT_PATH = ['/signin', '/signup'];

export class Redirect {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static modules: any = {};

  private static getContext = () =>
    this.modules?.context as IBeforeLoad['context'];

  private static getLocation = () =>
    this.modules?.location as IBeforeLoad['location'];

  private static getCurrentPath = () =>
    (this.modules.location as Location).href.split('?')[0];

  private static isAuthPages = () =>
    REDIRECT_PATH.includes(this.getCurrentPath());

  static inject = (args: unknown) => {
    this.modules = { ...this.modules, ...(args as IBeforeLoad) };
    return this;
  };

  static protectedRoute = () => {
    if (!this.getContext().auth && !this.isAuthPages()) {
      const { href } = this.getLocation();
      logger.log('redirect:from', href);
      throw redirect({
        to: '/signin',
        search: {
          redirect: href
        }
      });
    }
    return this;
  };

  static redirectTo = (to: string) => {
    if (this.getContext().auth) {
      logger.log('redirect:to', to);
      throw redirect({
        to
      });
    }
    return this;
  };
}
