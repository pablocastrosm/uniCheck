import React, { useReducer } from 'react';
import { USER_DATA } from '../services/storageService/storageKeys';
import { storageService } from "../services/storageService/storageService"
import { useTranslation } from 'react-i18next';
import { useAuth } from './authContext';
import { errorService } from '../services/errorService';


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

  const { token } = useAuth();
  const { t } = useTranslation();

  React.useEffect(() => {
    if(!token) signOutUser();
    else retrieveStoredData();
  }, [token])

  const initialUserData = {
    // Place here any initialization data
  };

  const userReducer = (prevState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...prevState,
          ...action.user
        }
      case 'UPDATE_USER':
        return {
          ...prevState,
          ...action.user
        };
      case 'SIGN_OUT':
        return initialUserData;
    }
  }

  const [userState, dispatch] = useReducer(userReducer, initialUserData);

  const signInUser = async (user) => {
    await storageService.setData(USER_DATA, JSON.stringify(user));
    dispatch({type: 'SIGN_IN', user: user });
  }

  const signOutUser = async () => {
    dispatch({type: 'SIGN_OUT'});
  }

  const updateUserInfo = async (newUserData) => {
    let newUserInfo = {
      ...userState,
      ...newUserData,
    };
    await storageService.setData(USER_DATA, JSON.stringify(newUserInfo));
    dispatch({type: 'UPDATE_USER', user: newUserData });
  }

  const retrieveStoredData = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await storageService.getData(USER_DATA);
        if (userData) {
          userData = JSON.parse(userData);
          dispatch({ type: 'SIGN_IN', user: userData });
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

  const actions = { signInUser, signOutUser, updateUserInfo, retrieveStoredData };

  return(
    <UserContext.Provider value={{ userState, ...actions }}>
      { children }
    </UserContext.Provider>
  )
};

export const useUserData = () => {
  return React.useContext(UserContext);
}