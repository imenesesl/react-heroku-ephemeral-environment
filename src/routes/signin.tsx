import { FileRoute } from '@tanstack/react-router';

import { SignIn } from '@pages/sign-in';

export const Route = new FileRoute('/signin').createRoute({
  beforeLoad: () => {
    // Todo: redirect to /me if exist
  },
  component: SignIn
});
