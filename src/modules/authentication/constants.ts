import { Logger } from '@modules/logger';

const MODULE_NAME = '@@Authentication';

export const PROVIDER_NAMES = ['google', 'facebook'] as const;

export const logger = new Logger(MODULE_NAME);
