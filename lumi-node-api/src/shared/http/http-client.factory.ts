import axios, { AxiosInstance } from 'axios';
import { IHttpClient, HttpClient } from '@shared/http';
import { IEnvConfig, envConfigFactory } from '@shared/env';

export const httpClientFactory = (): IHttpClient => {
  const envConfig: IEnvConfig = envConfigFactory();
  const axiosInstace: AxiosInstance = axios.create({
    baseURL: envConfig.getPDFServiceUrl(),
  });

  return new HttpClient(axiosInstace);
};
