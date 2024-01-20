import { CALLBACK_TYPES } from './constants';

export type CallbackTypes = (typeof CALLBACK_TYPES)[number];

export type ICallbackArgs = {
  type: CallbackTypes;
  event: string;
  userId: string;
  properties: Record<string, unknown>;
};

export type ITracker = {
  track: (args: ICallbackArgs) => Promise<void>;
};
