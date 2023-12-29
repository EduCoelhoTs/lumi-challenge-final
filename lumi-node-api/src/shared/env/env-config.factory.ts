import { EnvConfig, IEnvConfig } from '.';

export const envConfigFactory = (): IEnvConfig => {
  return new EnvConfig();
};
