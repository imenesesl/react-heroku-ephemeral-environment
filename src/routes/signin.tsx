import { createFileRoute } from '@tanstack/react-router';

import { SignIn } from '@pages/sign-in';

export const Route = createFileRoute('/signin')({
  beforeLoad: () => {
    // Todo: redirect to /me if exist
  },
  component: SignIn
});
