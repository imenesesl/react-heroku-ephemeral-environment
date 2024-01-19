export type ILogger = {
  log: (name: string, ...args: unknown[]) => void;
};
