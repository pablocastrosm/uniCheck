import i18next from "i18next"
import { showErrorToast } from "./toastService"
import HTTP_CODES from '../config/constants';


export const errorService = {
  /*
    DISPLAYS ERROR TOAST WITH A DEFAULT ERROR MESSAGE BASED ON ERROR STATUS CODE
    IF PROVIDED, A CUSTOM ERROR MESSAGE CAN ALSO BE DISPLAYED
  */
  error: (error, customErrorMessage = null) => {
    let errorMessage = customErrorMessage;
    if(!errorMessage) {
      switch(error?.response?.status) {
        case HTTP_CODES.BAD_REQUEST:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
        case HTTP_CODES.NOT_FOUND:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
        case HTTP_CODES.CONFLICT:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
        case HTTP_CODES.SERVER_ERROR:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
        case HTTP_CODES.BAD_GATEWAY:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
        default:
          errorMessage = i18next.t('ERROR.UNEXPECTED_ERROR');
          break;
      }
    }

    showErrorToast(
      i18next.t('ERROR.ERROR'),
      errorMessage,
      error?.response?.status
    )
  },
}