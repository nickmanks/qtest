import axios from 'axios';

export class GenericModel {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.api = axios.create({
      baseURL: 'http://localhost:8000' // json-server endpoint
    });
  }

  list() {
    return this.api.get(`/${this.endpoint}`).then((res)=> res.data);
  }
}
