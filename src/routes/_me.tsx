import { createFileRoute, Outlet } from '@tanstack/react-router';

const MeLayout = () => {
  return (
    <>
      <header>Me Header</header>
      <Outlet />
    </>
  );
};

export const Route = createFileRoute('/_me')({
  component: MeLayout,
  caseSensitive: true
});
