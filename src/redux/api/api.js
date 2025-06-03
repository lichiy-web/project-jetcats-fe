import axios from 'axios';

const appApiConfig = {
  // baseURL: 'https://project-jetcats-be-dev.onrender.com',
  // baseURL: 'https://project-jetcats-be.onrender.com',
  baseURL: 'http://localhost:3000',
  timeout: 4000,
  withCredentials: true,
};
const currencyApiConfig = {
  baseURL: 'https://api.monobank.ua',
  timeout: 4000,
};

export const appApi = axios.create(appApiConfig);
export const currencyApi = axios.create(currencyApiConfig);
