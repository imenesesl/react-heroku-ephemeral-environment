import { FileRoute } from '@tanstack/react-router';

const LoginPage = () => {
  return (
    <div className="p-2">
      <h3>Login page here!</h3>
    </div>
  );
};

export const Route = new FileRoute('/login').createRoute({
  beforeLoad: () => {
    // redirect to /me if exist
  },
  component: LoginPage
});
