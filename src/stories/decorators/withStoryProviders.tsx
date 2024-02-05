/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react';

import {
  createFileRoute,
  createRouter,
  Outlet,
  RootRoute,
  RouterProvider as RouterP
} from '@tanstack/react-router';

import { AppProvider } from '@core/providers/app';

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
  const RouterProvider = RouterP as unknown as FC<
    PropsWithChildren<{ router: typeof router }>
  >;

  return () => {
    return (
      <AppProvider>
        <RouterProvider router={router}>
          <Story {...context} />
        </RouterProvider>
      </AppProvider>
    );
  };
};
