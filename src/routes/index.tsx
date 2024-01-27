import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return <>Landing Page here!</>;
};

export const Route = createFileRoute('/')({ component: HomePage });
