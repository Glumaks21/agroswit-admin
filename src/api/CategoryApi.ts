import axios from 'axios';
import { ICategory } from './types';

const baseUrl = 'http://localhost:8080/api/v1/categories';

export default class CategoryApi {
  static async getAll() {
    try {
      const resp = await axios.get<ICategory[]>(baseUrl);

      return resp.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
