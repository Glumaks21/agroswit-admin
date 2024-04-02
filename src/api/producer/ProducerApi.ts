import axios from 'axios';
import { IProducer } from './types';
import { ApiError } from '../ApiError';

const baseUrl = 'http://localhost:8080/api/v1/producers';

export class ProducerApi {
  static async getAll() {
    try {
      const resp = await axios.get<IProducer>(baseUrl);

      return resp.data;
    } catch (e) {
      console.error(e);
      throw new ApiError();
    }
  }
}
