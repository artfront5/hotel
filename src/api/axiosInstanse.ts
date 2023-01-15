import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'http://engine.hotellook.com/api/v2/lookup.json',
  timeout: 10000,
});
