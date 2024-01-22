import { Logger } from '@modules/logger';

const MODULE_NAME = '@@Tracker';

export const CALLBACK_TYPES = ['track'] as const;

export const logger = new Logger(MODULE_NAME);
