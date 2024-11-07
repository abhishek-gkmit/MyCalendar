import { AxiosResponse } from 'axios';

import { showErrorToast } from '@utility/helpers';

export function handleError(res: AxiosResponse) {
  const { status: statusCode } = res;

  if (statusCode === 200) {
    return res.data;
  } else if (statusCode === 400) {
    showErrorToast('Error', 'There is some Error');
  } else if (statusCode === 404) {
    showErrorToast('Not Found', 'Resource not found');
  } else if (statusCode === 500) {
    showErrorToast('Server Error', 'There is an error on server side');
  } else {
    showErrorToast('Unknown Error', 'Please contact the developer');
  }

  return null;
}
