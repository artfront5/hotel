import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://engine.hotellook.com/api/v2/cache.json',
  timeout: 10000,
});
