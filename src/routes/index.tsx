import { FileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return <>Landing Page here!</>;
};

export const Route = new FileRoute('/').createRoute({
  component: HomePage
});
