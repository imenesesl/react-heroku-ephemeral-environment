import { createFileRoute } from '@tanstack/react-router';

const NotFoundPage = () => {
  return (
    <div className="p-2">
      <h3>404 page here!</h3>
    </div>
  );
};

export const Route = createFileRoute('/*')({
  component: NotFoundPage
});
