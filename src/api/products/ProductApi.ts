import axios from 'axios';
import { ApiError } from '../ApiError';

const baseUrl = 'http://localhost:8080/api/v1/products';

interface PaginationProps {
  page: number;
  size: number;
}

export class ProductApi {
  static async getAll(props: PaginationProps) {
    try {
      const resp = await axios.get(baseUrl, {
        params: {
          ...props,
        },
      });

      return { products: resp.data, totalPages: resp.headers['X-Total-Count'] };
    } catch (e) {
      console.error(e);
      throw new ApiError();
    }
  }

  static async getById(id: number) {
    try {
      const resp = await axios.get(`${baseUrl}/${id}`);
      return resp.data;
    } catch (e) {
      console.error(e);
      throw new ApiError();
    }
  }
}
