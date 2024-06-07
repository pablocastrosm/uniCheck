import { NativeModules } from 'react-native';
import Toast from 'react-native-toast-message';


const ENV = NativeModules.RNConfig.env;

export function showErrorToast(title, message, code) {
  let text1 = '';
  if (ENV !== 'prod' && code != null && code != undefined) text1 = title + ' (' + code + ')';
  else text1 = title;
  Toast.show({
    type: 'error',
    text1: text1,
    text2: message
  })
}

export function showSuccessToast(title, message) {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message
  })
}

export function showInfoToast(message) {
  Toast.show({
    type: 'info',
    text1: '',
    text2: message
  })
}

export function showInfoToastWithTitle(title, message, visibilityTime) {
  Toast.show({
    type: 'info',
    text1: title,
    text2: message,
    visibilityTime: visibilityTime
  })    
}