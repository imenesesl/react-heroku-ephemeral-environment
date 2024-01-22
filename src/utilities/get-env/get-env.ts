import { IEnvVariable, IEnvVariableOptions } from './types';
import { logger } from './utils/constants';

export const getEnv = (key: IEnvVariable, options?: IEnvVariableOptions) => {
  const { isGlobal = false } = options ?? {};
  const prefix = isGlobal ? '' : 'VITE_';
  const value = process.env[`${prefix}${key}`];
  if (value) return value;
  logger.log('key-not-found', { key, isGlobal });
  return '';
};
