import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'some url',
    });
  }

  public api(): AxiosInstance {
    return this.client;
  }
}
