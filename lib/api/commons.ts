import axios from 'axios';

const authority = "http://localhost:3000";
const httpClient = axios.create({
  baseURL: authority,
  timeout: 10000,
  withCredentials: true
});

export default httpClient;