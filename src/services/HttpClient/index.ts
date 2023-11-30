import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpParams extends AxiosRequestConfig {}
export interface IHttpResponse extends AxiosResponse {}
export interface IHttpClient {
  get(url: string, params?: IHttpParams): Promise<IHttpResponse>
  post(url: string, params: IHttpParams): Promise<IHttpResponse>
  put(url: string, params: IHttpParams): Promise<IHttpResponse>
  delete(url: string, params: IHttpParams): Promise<IHttpResponse>
}

export default class HttpClient implements IHttpClient {
  constructor(private $http: AxiosInstance) {}
  private async request(
      method: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>,
      url: string,
      params?: IHttpParams
  ): Promise<IHttpResponse> {
    try {
      const response = await method(url, params);
      return response;
    } catch (e) {
      console.error(`Error in ${method.name} request:`, e);
      throw e; // Прокидываем ошибку дальше для обработки
    }
  }

  async get(url: string, params: IHttpParams = {}): Promise<IHttpResponse> {
    return this.request(this.$http.get, url, params);
  }

  async post(url: string, params: IHttpParams = {}): Promise<IHttpResponse> {
    return this.request(this.$http.post, url, params?.data ? { ...params, data: params.data } : params);
  }

  async put(url: string, params: IHttpParams = {}): Promise<IHttpResponse> {
    return this.request(this.$http.put, url, params?.data ? { ...params, data: params.data } : params);
  }

  async delete(url: string, params: IHttpParams = {}): Promise<IHttpResponse> {
    return this.request(this.$http.delete, url, params);
  }
}
