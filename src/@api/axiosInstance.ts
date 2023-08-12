import axios, { InternalAxiosRequestConfig } from 'axios';
import { handleAxiosDates } from 'src/@utils/date.utils';

export const api_ = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

api_.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api_.interceptors.response.use((response) => {
  handleAxiosDates(response.data);
  return response;
});
