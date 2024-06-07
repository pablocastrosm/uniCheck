import React from "react"; 

import './assets/i18n/i18n';
import { AuthProvider } from './app/providers/authContext';
import { AxiosProvider } from './app/providers/axiosContext';
import Router from './app/router';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import toastConfig from './app/config/toastConfig';
import { Host } from "react-native-portalize";


const App = () => { 
  return ( 
    <AuthProvider>
      <AxiosProvider>
        <Host>
          <Router></Router>
          <Toast config={toastConfig}/>
        </Host>
      </AxiosProvider>
    </AuthProvider>
  ); 
};

export default App; 