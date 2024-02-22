import {BASE_URL, API_VERSION} from '@env';
import axios from 'axios';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetcher(url: string) {
  try {
    const authHeader = await getAuthToken();
    const {data} = await instance.get(url, {
      headers: {
        Authorization: authHeader,
      },
    });
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}
