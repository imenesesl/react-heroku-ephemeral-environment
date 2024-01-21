import { FileRoute, Outlet } from '@tanstack/react-router';

const MeLayout = () => {
  return (
    <>
      <header>Me Header</header>
      <Outlet />
    </>
  );
};

export const Route = new FileRoute('/_me').createRoute({
  component: MeLayout,
  caseSensitive: true
});
