import { ClassNameArg } from './types';

export const clsx = (...args: ClassNameArg[]) => {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === 'string') {
      classes.push(arg);
    } else {
      Object.entries(arg).forEach(([className, condition]) => {
        if (condition) {
          classes.push(className);
        }
      });
    }
  });

  return classes.join(' ');
};
