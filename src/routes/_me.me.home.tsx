import { createFileRoute } from '@tanstack/react-router';

import { Redirect } from '@utilities/redirect';

const MePage = () => {
  return <>Me Page Page here!</>;
};

export const Route = createFileRoute('/_me/me/home')({
  beforeLoad: ({ context, location }) => {
    Redirect.inject({ context, location }).protectedRoute();
  },
  component: MePage
});
