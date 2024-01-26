import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Scaffold } from '@components/scaffold';

const StoreLayout = () => {
  return (
    <Scaffold>
      <Outlet />
    </Scaffold>
  );
};

export const Route = createFileRoute('/_store')({
  component: StoreLayout
});
