import React from 'react';
import { Image, Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';

import MainButton from '../components/core/MainButton';
import MainText from '../components/core/MainText';
import MainInput from '../components/core/MainInput';
import MainLoading from '../components/core/MainLoading';
import MainContainer from '../components/core/MainContainer';
import { isValidEmail } from '../utils/formValidators';
import { useTranslation } from 'react-i18next';
import { AuthService } from '../services/authService';
import { SECONDARY_BUTTON } from '../config/constants';
import globalStyles from '../config/globalStyles';


function LoginScreen({ navigation }) {

  const { t } = useTranslation();
  const { login } = AuthService();

  const initialErrorsObject = {
    emailError: false,
    authError: false
  }
  const [userInfo, setUserInfo] = React.useState({email: '', password: ''})
  const [errors, setErrors] = React.useState(initialErrorsObject);
  const [isLoading, setLoading] = React.useState(false);

  const clearErrors = () => {
    setErrors(initialErrorsObject);
  }

  const loginUser = () => {
    if(userInfo.email && userInfo.password) {
      Keyboard.dismiss();
      clearErrors();
      if (!isValidEmail(userInfo.email)) setErrors((prevState) => ({ ...prevState, emailError: true }));
      else {
        setLoading(true);
        login(userInfo).catch(err => {
          setErrors((prevState) => ({ ...prevState, authError: true }));
        }).finally(() => {
          setLoading(false);
        })
      }
    }
  }

  return (
    <MainContainer>
      <View style={globalStyles.container}>
        <Image source={require('../../assets/img/logo.png')} style={{width: 200, height: 200, alignSelf: 'center'}}></Image>
        <MainText style={styles.subtitle}>{t('LOGIN.LOGIN').toUpperCase()}</MainText>
        <MainInput style={styles.inputField}
          type='email-address'
          placeholder={t('FORM_FIELDS.EMAIL')}
          value={userInfo.email}
          editable={!isLoading}
          onChange={(email) => { setUserInfo((prevState) => ({...prevState, email: email })) }}
          error={errors.emailError}
          errorMessage={t('FORM_ERRORS.INVALID_EMAIL')} />           
        <MainInput style={styles.inputField}
          value={userInfo.password}
          placeholder={t('FORM_FIELDS.PWD')}
          editable={!isLoading}
          secure
          onChange={(pass) => { setUserInfo((prevState) => ({...prevState, password: pass })) }}
          error={errors.authError}
          errorMessage={t('LOGIN.AUTH_ERROR')} />
        <TouchableOpacity disabled={isLoading} onPress={() => {navigation.navigate('ResetPwd')}}>
          <MainText style={styles.topMargin}>{t('LOGIN.FORGOT_PWD')} {t('BUTTONS.RECOVER')}</MainText>
        </TouchableOpacity>
      </View>
      <MainButton style={styles.topMargin} onPress={loginUser}>
        {t('LOGIN.LOGIN')}
      </MainButton>
      <MainButton 
      buttonType={SECONDARY_BUTTON}
      style={styles.topMargin} 
      onPress={() => navigation.navigate('Register')}
        disabled={isLoading}>
        {t('REGISTER.REGISTER')}
      </MainButton>
      {isLoading && <MainLoading fullscreen />}
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    alignSelf: 'center',
    marginBottom: 15
  },
  inputField: {
    marginVertical: 8
  },
  topMargin: {
    marginTop: 10
  }
});

export default LoginScreen;