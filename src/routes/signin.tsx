import { createFileRoute } from '@tanstack/react-router';

import { SignIn } from '@pages/sign-in';
import { redirectBeforeLoadRequireAuthentication } from '@utilities/redirect';

export const Route = createFileRoute('/signin')({
  beforeLoad: redirectBeforeLoadRequireAuthentication('/me/home'),
  component: SignIn
});
