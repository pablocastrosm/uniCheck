import React from "react";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import globalStyles from "./globalStyles";

export default toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={[globalStyles.toast,globalStyles.successToast]}
      contentContainerStyle={globalStyles.toastContent}
      text1Style={globalStyles.toastText1}
      text2Style={globalStyles.toastText2}
      text1NumberOfLines={2}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={[globalStyles.toast, globalStyles.errorToast]}
      contentContainerStyle={globalStyles.toastContent}
      text1Style={globalStyles.toastText1}
      text2Style={globalStyles.toastText2}
      text2NumberOfLines={2}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={[globalStyles.toast,globalStyles.infoToast]}
      contentContainerStyle={globalStyles.toastContent}
      text1Style={globalStyles.toastText1}
      text2Style={globalStyles.toastText2}
      text1NumberOfLines={2}
    />
  ),
};