import { IHttpClient } from '@shared/http';
import { AxiosInstance } from 'axios';

export class HttpClient implements IHttpClient {
  constructor(private readonly axiosInstace: AxiosInstance) {}

  get = this.axiosInstace.get;
  post = this.axiosInstace.post;
}
