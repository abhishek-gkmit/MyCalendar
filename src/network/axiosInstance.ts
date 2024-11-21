import axios, { AxiosError, CreateAxiosDefaults } from 'axios';

import { setRequestInterceptor } from '@utility/helpers';
import { TOKENS, saveAccessToken } from '@utility/asyncStorage';

import { getAccessTokenFromApi } from './apiMethods';
import { apiConstants } from './apiConstants';
import { handleError } from './errorHandler';

const { BASE_URL } = apiConstants;

const instanceConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
};

export const axiosInstance = axios.create(instanceConfig);

axiosInstance.interceptors.response.use(
  null,
  async function onError(error: AxiosError) {
    const { status: statusCode } = error;

    if (statusCode === 401) {
      // accessToken expired
      console.error('Error: accessToken expired. Refresing accessToken...');

      const accessToken = await getAccessTokenFromApi(TOKENS.refresh_token);
      if (accessToken) {
        saveAccessToken(accessToken);
        setRequestInterceptor(accessToken);

        if (error.config) {
          const { config: requestConfig } = error;
          requestConfig.headers['Authorization'] = 'Bearer ' + accessToken;
          return await axios.request(requestConfig);
        }
      }
    }

    handleError(error);
  },
);
