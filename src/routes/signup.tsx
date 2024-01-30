import { createFileRoute } from '@tanstack/react-router';

import { SignUp } from '@pages/sign-up';
import { Redirect } from '@utilities/redirect';

export const Route = createFileRoute('/signup')({
  beforeLoad: ({ context }) => {
    Redirect.inject(context).redirectTo('/me/home');
  },
  component: SignUp
});
