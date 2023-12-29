import { AxiosRequestConfig } from 'axios';
import {http} from './api';

export default class HttpClient{

  public static async get<T>(url: string, config?:  AxiosRequestConfig<object>): Promise<T> {
    try {
      const response = await http.get(url, {...config });

      return response.data;
    } catch (err: any) {
      return err;
    }
  }

  public static async post<T>(url: string, data: object, config?: AxiosRequestConfig<object>): Promise<T> {
    try {
      const response = await http.post(url, data, {...config });
      
      return response.data;
    } catch (err: any) {
      return err;
    }
  }

  public static async put<T>(url: string, send: object, config?: AxiosRequestConfig<object>): Promise<T> {
    try {
      const response = await http.put(url, send, {...config});
      return response.data;
    } catch (err: any) {
      return err;
    }
  }

  public static async delete(url: string, config?: AxiosRequestConfig<object>) {
    try {
      await http.delete(url, {...config});
      return true;
    } catch (err: any) {
      return false;
    }
  }
};