export type IFProps<T> = {
  condition: boolean;
  element: React.FunctionComponent<T>;
  data?: T;
};

export type IFAsyncProps<T> = {
  element: React.FunctionComponent<T>;
  data: T;
  loading: boolean;
  error: Error | null;
};
