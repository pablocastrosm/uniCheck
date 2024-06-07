import React from 'react';
import axios from 'axios';
import { NativeModules } from 'react-native';
import { env } from '../../envs';
import { useAuth } from './authContext';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { errorService } from '../services/errorService';


export const AxiosContext = React.createContext(null);

export const AxiosProvider = ({ children }) => {

  const { t } = useTranslation();
  const { token, signOut } = useAuth();
  const API_BASE_URL = env[NativeModules.RNConfig.env].apiUrl;

  const mainAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": i18next.language
    }
  });

  mainAxios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) config.headers.Authorization = 'Bearer ' + token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  mainAxios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        setTimeout(() => {
          Toast.hide();
          errorService.error(null, t('ERROR.LOADING_USER'));
        }, 1000);
        signOut();
      } else {
        return Promise.reject(error);
      }
  });

  return (
    <AxiosContext.Provider value={{ mainAxios }}>
      { children }
    </AxiosContext.Provider>
  );
}

export const useAxios = () => {
  return React.useContext(AxiosContext);
}