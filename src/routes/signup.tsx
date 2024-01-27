import { createFileRoute } from '@tanstack/react-router';

import { SignUp } from '@pages/sign-up';

export const Route = createFileRoute('/signup')({
  beforeLoad: () => {
    // Todo: redirect to /me if exist
  },
  component: SignUp
});
