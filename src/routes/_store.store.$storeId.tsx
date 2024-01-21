import { FileRoute } from '@tanstack/react-router';

const StoreId = () => {
  const loader = Route.useLoaderData();
  return <>Store id Page here! {JSON.stringify(loader)}</>;
};

export const Route = new FileRoute('/_store/store/$storeId').createRoute({
  component: StoreId,
  pendingComponent: () => <>loader...</>,
  errorComponent: () => <>error...</>,
  onError: (...args) => alert(`ERROR: ${JSON.stringify(args)}`),
  loader: ({ params: { storeId } }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: storeId, data: {} });
      }, 1000);
    })
});
