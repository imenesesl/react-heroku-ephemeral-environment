import { FileRoute } from '@tanstack/react-router';

import { SignUp } from '@pages/sign-up';

export const Route = new FileRoute('/signup').createRoute({
  beforeLoad: () => {
    // Todo: redirect to /me if exist
  },
  component: SignUp
});
