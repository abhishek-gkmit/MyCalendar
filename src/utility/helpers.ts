import Toast, { ToastType } from 'react-native-toast-message';

export function showToast(type: ToastType, heading: string, message: string) {
  Toast.show({ type, text1: heading, text2: message });
}

export function showErrorToast(heading: string, message: string) {
  showToast('error', heading, message);
}
