import { createFileRoute } from '@tanstack/react-router';

import { redirectBeforeLoadRequireAuthentication } from '@utilities/redirect';

const MePage = () => {
  return <>Me Page Page here!</>;
};

export const Route = createFileRoute('/_me/me/home')({
  beforeLoad: redirectBeforeLoadRequireAuthentication(),
  component: MePage
});
