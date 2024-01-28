import { ParsedLocation } from '@tanstack/react-router';

import { AuthenticationContextProps } from '@core/providers/authentication/types';

export type IContext = {
  auth: AuthenticationContextProps;
};

export type IBeforeLoad = {
  context: IContext;
  location: ParsedLocation;
};
