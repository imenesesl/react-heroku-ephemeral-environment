import { FileRoute, Outlet } from '@tanstack/react-router';

import { Scaffold } from '@components/scaffold';

const StoreLayout = () => {
  return (
    <Scaffold>
      <Outlet />
    </Scaffold>
  );
};

export const Route = new FileRoute('/_store').createRoute({
  component: StoreLayout
});
