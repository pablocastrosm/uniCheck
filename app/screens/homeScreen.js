import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainButton from '../components/core/MainButton';
import { useTranslation } from 'react-i18next';
import { AuthService } from '../services/authService';
import MainContainer from '../components/core/MainContainer';
import MainText from '../components/core/MainText';
import MainHeader from '../components/core/MainHeader';
import globalStyles from '../config/globalStyles';


function HomeScreen(props) {

  const { t } = useTranslation();
  const { logout } = AuthService();

  return (
    <>
      <MainHeader title='HOME'/>
      <MainContainer>
        <View style={globalStyles.container}>
          <MainText>HOME WORKS!</MainText>
        </View>
        <MainButton onPress={logout}>
          {t('LOGIN.LOGOUT')}
        </MainButton>
      </MainContainer>
    </>
  );
}

const styles = StyleSheet.create({
});

export default HomeScreen;