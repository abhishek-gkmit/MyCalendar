import { AxiosError } from 'axios';

import { showErrorToast } from '@utility/toastHelpers';
import { setRequestInterceptor } from '@utility/helpers';
import { TOKENS, saveAccessToken } from '@utility/asyncStorage';

import { getAccessTokenFromApi } from './apiMethods';

export async function handleError(error: AxiosError) {
  const { status: statusCode } = error;

  if (statusCode === 401) {
    // accessToken expired
    console.error('Error: accessToken expired. Refresing accessToken...');

    const accessToken = await getAccessTokenFromApi(TOKENS.refresh_token);
    if (accessToken) {
      saveAccessToken(accessToken);
      setRequestInterceptor(accessToken);
    }
  } else if (statusCode === 400) {
    showErrorToast('Error', 'There is some Error');
  } else if (statusCode === 404) {
    showErrorToast('Not Found', 'Resource not found');
  } else if (statusCode === 500) {
    showErrorToast('Server Error', 'There is an error on server side');
  } else {
    console.error(error);
    showErrorToast('Unknown Error', 'Please contact the developer');
  }

  return null;
}
