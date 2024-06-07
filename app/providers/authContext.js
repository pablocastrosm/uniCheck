import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { USER_DATA, USER_TOKEN } from '../services/storageService/storageKeys';
import { storageService } from "../services/storageService/storageService"
import { errorService } from '../services/errorService';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const {t} = useTranslation();

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return action.token
      case 'SIGN_OUT':
        return null;
    }
  }

  const [token, dispatch] = useReducer(authReducer, null);

  const signIn = async (user) => {
    await storageService.setData(USER_DATA, JSON.stringify(user.user));
    await storageService.setData(USER_TOKEN, user.token);
    dispatch({type: 'SIGN_IN', token: user.token });
  }

  const signOut = async () => {
    storageService.clearAllData();
    dispatch({type: 'SIGN_OUT'});
  }

  const retrieveStoredToken = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        let token = await storageService.getData(USER_TOKEN);
        if (token) {
          dispatch({ type: 'SIGN_IN', token: token });
          resolve(true);
        } else {
          resolve(true);
        }
      } catch (e) {
        storageService.clearAllData();
        errorService.error(null, t('ERROR.LOADING_USER'));
        resolve(true);
      }
    });
  }

  const actions = { signIn, signOut, retrieveStoredToken };

  return(
    <AuthContext.Provider value={{ token, ...actions }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return React.useContext(AuthContext);
}