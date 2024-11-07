import axios, {CreateAxiosDefaults} from 'axios';

import {apiConstants} from './apiConstants';

const {BASE_URL} = apiConstants;

const instanceConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
};

export const axiosInstance = axios.create(instanceConfig);
