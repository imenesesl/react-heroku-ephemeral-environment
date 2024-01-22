import { ENV_VARIABLES } from './utils/constants';

export type IEnvVariable = (typeof ENV_VARIABLES)[number];

export type IEnvVariableOptions = {
  isGlobal?: boolean;
};
