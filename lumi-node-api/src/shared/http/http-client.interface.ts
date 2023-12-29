export interface Response<T = any> {
  data: T;
  status: number;
  statusText: string;
  request?: any;
}

export interface IHttpClient {
  get<T = any, R = Response<T>, D = unknown>(
    url: string,
    config?: D | undefined,
  ): Promise<R>;

  post<T = any, R = Response<T>, D = unknown>(
    url: string,
    data?: D | undefined,
    config?: D | undefined,
  ): Promise<R>;
}
