import { createFileRoute } from '@tanstack/react-router';

import { SignIn } from '@pages/sign-in';
import { Redirect } from '@utilities/redirect';

export const Route = createFileRoute('/signin')({
  beforeLoad: ({ context }) => {
    Redirect.inject({ context }).redirectTo('/me/home');
  },
  component: SignIn
});
