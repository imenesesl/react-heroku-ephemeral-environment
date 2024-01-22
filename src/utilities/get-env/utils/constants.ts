import { Logger } from '@modules/logger';

const UTILITY_NAME = '@@GetEnv';

const GLOBALS_ENV_VARIABLES = ['NODE_ENV'] as const;

const SEGMENT_ENV_VARIABLES = ['SEGMENT__WRITE_KEY'] as const;

const FIREBASE_ENV_VARIABLES = [
  'FIREBASE__API_KEY',
  'FIREBASE__AUTH_DOMAIN',
  'FIREBASE__PROJECT_ID',
  'FIREBASE__STORAGE_BUCKET',
  'FIREBASE__MESSAGING_SENDER_ID',
  'FIREBASE__APP_ID'
] as const;

export const ENV_VARIABLES = [
  ...SEGMENT_ENV_VARIABLES,
  ...FIREBASE_ENV_VARIABLES,
  ...GLOBALS_ENV_VARIABLES
] as const;

export const logger = new Logger(UTILITY_NAME);
