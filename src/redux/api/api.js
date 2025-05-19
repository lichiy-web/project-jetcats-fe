import axios from 'axios';

const configAppApi = {
  baseURL: 'https://project-jetcats-be.onrender.com',
  timeout: 4000,
};

export const appApi = axios.create(configAppApi);
