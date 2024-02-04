/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import {
  createFileRoute,
  createRouter,
  Outlet,
  RootRoute,
  RouterProvider
} from '@tanstack/react-router';

import { records } from '@locales/records';
import { I18nProvider } from '@modules/i18n';

export const withStoryProviders = (Story: FC<any>, context: any) => {
  const rootRoute = new RootRoute({
    component: Outlet
  });

  const Import = createFileRoute('/*')({
    component: () => <Story {...context} />
  });

  const Route = Import.update({
    path: '/*',
    getParentRoute: () => rootRoute
  } as any);

  const routeTree = rootRoute.addChildren([Route]);

  const router = createRouter({ routeTree, defaultPreload: 'intent' });
  return () => {
    const RouterP: any = RouterProvider;
    return (
      <RouterP router={router}>
        <I18nProvider records={records}>
          <Story {...context} />
        </I18nProvider>
      </RouterP>
    );
  };
};
