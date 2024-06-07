import { Platform } from "react-native"
import colors from "./colors"

export default globalStyles = {
  container: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  scrollContent: {
    padding: 12,
    flexGrow: 1,
  },
  toast: {
    borderLeftWidth: 0, 
    marginTop: Platform.OS === 'android' ? -25 : 0,
    width: '94%'
  },
  successToast: {
    backgroundColor: colors.success
  },
  errorToast: {
    backgroundColor: colors.error
  },
  infoToast: {
    backgroundColor: colors.dark_gray,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary
  },
  toastContent: {
    paddingHorizontal: 15
  },
  toastText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white
  },
  toastText2: {
    fontSize: 12,
    color: colors.white,
  },
  iconButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: colors.dark_gray
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 1000,
    backgroundColor: colors.light_gray
  },
  smallProfilePic: {
    width: 28,
    height: 28,
    borderRadius: 1000,
    backgroundColor: colors.light_gray
  },
}