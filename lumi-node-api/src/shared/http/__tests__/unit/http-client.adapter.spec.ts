import { AxiosInstance } from 'axios';
import { HttpClient, IHttpClient } from '@shared/http';

describe('HttpClient unit tests', () => {
  let sut: IHttpClient;
  let axiosInstace: AxiosInstance;

  beforeEach(() => {
    axiosInstace = {
      get: jest.fn().mockResolvedValue({}),
      post: jest.fn().mockResolvedValue({}),
    } as any as AxiosInstance;
    sut = new HttpClient(axiosInstace);
  });

  describe('HttpClient.get', () => {
    it('Should call axiosInstace.get correctly', async () => {
      const result = await sut.get('test');

      expect(result).toStrictEqual({});
      expect(axiosInstace.get).toHaveBeenCalledTimes(1);
      expect(axiosInstace.get).toHaveBeenCalledWith('test');
    });
  });

  describe('HttpClient.post ', () => {
    it('Should call axiosInstace.post correctly', async () => {
      const result = await sut.post('test', {});

      expect(result).toStrictEqual({});
      expect(axiosInstace.post).toHaveBeenCalledTimes(1);
      expect(axiosInstace.post).toHaveBeenCalledWith('test', {});
    });
  });
});
