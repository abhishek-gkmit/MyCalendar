import { AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axiosInstance';
import { handleError } from './errorHandler';

export async function _get(endpoint: string, params: any) {
  const res = await axiosInstance.get(endpoint, { params });

  return handleError(res);
}

export async function _post(
  endpoint: string,
  body: any,
  isLoginRelated = false,
  data: any,
  loginConfig: AxiosRequestConfig = {},
) {
  if (isLoginRelated) {
    const res = await axiosInstance.post('', data, loginConfig);

    return handleError(res);
  }

  const res = await axiosInstance.post(endpoint, body);

  return handleError(res);
}

export async function _put(endpoint: string, body: any) {
  const res = await axiosInstance.put(endpoint, body);

  return handleError(res);
}
