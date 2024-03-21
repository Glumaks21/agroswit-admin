import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/products';

class ProductApi {
  static async getAll() {
    const resp = await axios.get(baseUrl);

    return resp.data;
  }
}
