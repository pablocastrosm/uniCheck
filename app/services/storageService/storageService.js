import AsyncStorage from '@react-native-async-storage/async-storage';
import { HAS_SEEN_ONBOARDING } from './storageKeys';

export const storageService = {

  getData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {}
  },

  setData: async (key, value) => {
    try {
      return (await AsyncStorage.setItem(key, value));
    } catch (e) {}
  },

  clearAllData: async () => {
    try {
      if (Platform.OS === 'android') return(await AsyncStorage.clear());
      else if (Platform.OS === 'ios') {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        return(await AsyncStorage.multiRemove(asyncStorageKeys));
      }

      AsyncStorage.setItem(HAS_SEEN_ONBOARDING, 'true');
    } catch (e) {}
  }
}