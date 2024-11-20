import { axiosInstance } from '@network/axiosInstance';

export function setRequestInterceptor(accessToken: string) {
  // setting interceptors so we don't have to pass the `Authorization` token everytime
  axiosInstance.interceptors.request.clear();
  axiosInstance.interceptors.request.use(function onFulfilled(config) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export function formatDateWithoutTimezone(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}
