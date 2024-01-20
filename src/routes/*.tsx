import { FileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <div className="p-2">
      <h3>404</h3>
    </div>
  );
};

export const Route = new FileRoute('/*').createRoute({
  component: HomePage
});
