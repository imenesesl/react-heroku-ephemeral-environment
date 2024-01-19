import { logger } from './constants';
import { ICallbackArgs, ITracker } from './types';

export class Tracker implements ITracker {
  private writeKey: string;
  private baseUrl = 'https://api.segment.io/v1';
  constructor(writeKey: string) {
    this.writeKey = writeKey;
  }

  private request = async ({
    event,
    properties,
    type,
    userId
  }: ICallbackArgs) => {
    try {
      const response = await fetch(`${this.baseUrl}/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${this.writeKey}:`)}`
        },
        body: JSON.stringify({
          event,
          userId,
          properties
        })
      });
      const data = await response.json();
      logger.log('success', data);
    } catch (error) {
      logger.log('error', error);
    }
  };

  track = (args: ICallbackArgs) => this.request(args);
}
