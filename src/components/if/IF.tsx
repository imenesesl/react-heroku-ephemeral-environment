import { ErrorBoundary } from '@components/error-boundary';

import { IFProps } from './types';

export const IF = <T extends object>({
  element: Element,
  data,
  condition
}: IFProps<T>) => {
  const Content = condition ? <Element {...(data as T)} /> : null;

  return <ErrorBoundary id={Element.name}>{Content}</ErrorBoundary>;
};
