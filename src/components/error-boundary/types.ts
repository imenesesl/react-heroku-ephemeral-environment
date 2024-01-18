import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
  id: string;
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};
