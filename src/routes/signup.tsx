import { createFileRoute } from '@tanstack/react-router';

import { SignUp } from '@pages/sign-up';
import { redirectBeforeLoadRequireAuthentication } from '@utilities/redirect';

export const Route = createFileRoute('/signup')({
  beforeLoad: redirectBeforeLoadRequireAuthentication('/me/home'),
  component: SignUp
});
