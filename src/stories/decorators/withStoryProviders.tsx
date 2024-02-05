/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react';

import {
  createFileRoute,
  createRouter,
  Outlet,
  RootRoute,
  RouterProvider as RouterP
} from '@tanstack/react-router';

import { AppStoriesProvider } from './AppStoriesProvider';

export const withStoryProviders = (Story: FC<any>, args: any) => {
  const rootRoute = new RootRoute({
    component: Outlet
  });

  const Import = createFileRoute('/*')({
    component: () => <Story {...args} />
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
      <AppStoriesProvider>
        <RouterProvider router={router}>
          <Story {...args} />
        </RouterProvider>
      </AppStoriesProvider>
    );
  };
};
