import { FC, PropsWithChildren } from 'react';

export const reduceProviders = (
  ...components: FC<PropsWithChildren>[]
): FC<PropsWithChildren> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: PropsWithChildren): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
