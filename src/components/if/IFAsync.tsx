import { ErrorBoundary } from '@components/error-boundary';
import { IFAsyncProps } from './types';

export const IFAsync = <T extends object>({
  element: Element,
  data,
  loading,
  error
}: IFAsyncProps<T>) => {
  let Content;
  if (loading) {
    Content = <div>Loading...</div>;
  } else if (error) {
    Content = <div>Error: {error.message}</div>;
  } else {
    Content = <Element {...data} />;
  }

  return <ErrorBoundary id={Element.name}>{Content}</ErrorBoundary>;
};
