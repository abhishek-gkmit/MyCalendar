import { AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axiosInstance';

export async function _get(endpoint: string, params?: any) {
  const res = await axiosInstance.get(endpoint, { params });

  return res.data;
}

export async function _post(
  endpoint: string,
  body: any,
  config?: AxiosRequestConfig,
) {
  const res = await axiosInstance.post(endpoint, body, config);

  return res.data;
}

export async function _postForLogin(
  data: any,
  loginConfig: AxiosRequestConfig = {},
) {
  const res = await axiosInstance.post('', data, loginConfig);

  return res.data;
}

export async function _put(endpoint: string, body: any) {
  const res = await axiosInstance.put(endpoint, body);

  return res.data;
}
