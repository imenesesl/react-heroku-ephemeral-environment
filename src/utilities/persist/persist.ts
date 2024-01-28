import { logger, UTILITY_NAME } from './constants';

export const persist = () => {
  const get = (key: string) => {
    try {
      const value = localStorage.getItem(`${UTILITY_NAME}:${key}`);
      if (!value && typeof value === 'object') return null;
      return JSON.parse(value);
    } catch (error) {
      logger.log('get:error', error);
      return null;
    }
  };

  const set = (key: string, data: unknown) => {
    try {
      if (!data && typeof data === 'object') return;
      const stringify = JSON.stringify(data);
      localStorage.setItem(`${UTILITY_NAME}:${key}`, stringify);
    } catch (error) {
      logger.log('set:error', error);
    }
  };

  return { get, set };
};
