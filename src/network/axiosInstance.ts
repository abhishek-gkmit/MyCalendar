import axios, { AxiosError, CreateAxiosDefaults } from 'axios';

import { apiConstants } from './apiConstants';
import { handleError } from './errorHandler';

const { BASE_URL } = apiConstants;

const instanceConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
};

export const axiosInstance = axios.create(instanceConfig);

axiosInstance.interceptors.response.use(null, function onError(error) {
  handleError(error);
});
