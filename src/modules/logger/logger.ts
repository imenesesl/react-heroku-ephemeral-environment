import { ILogger } from './types';

export class Logger implements ILogger {
  target: string;
  constructor(target: string) {
    this.target = target;
  }
  log = (name: string, ...args: unknown[]) => {
    console.log({ name, target: this.target }, { ...args });
  };
}
