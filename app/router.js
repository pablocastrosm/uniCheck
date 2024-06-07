
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
import { useAuth } from './providers/authContext';
import colors from './config/colors';
import RegisterScreen from './screens/registerScreen';
import ResetPwdScreen from './screens/resetPwdScreen';
import SplashScreen from  "react-native-splash-screen";
import { UserProvider } from './providers/userContext';
import OnboardingScreen from './screens/onboardingScreen';
import { storageService } from './services/storageService/storageService';
import { HAS_SEEN_ONBOARDING } from './services/storageService/storageKeys';


export default function Router(props) {

  const { token, retrieveStoredToken } = useAuth();

  const [isFirstTime, setIsFirstTime] = React.useState(false);
  const [retrievedData, setRetrievedData] = React.useState(null);

  React.useEffect(() => {
    retrieveStoredToken().then(res => {
      setRetrievedData(res);
    });
  }, [])

  React.useEffect(() => {
    const checkShouldShowOnboarding = async () => {
      const hasSeenOnboarding = await storageService.getData(HAS_SEEN_ONBOARDING);
      setIsFirstTime(!hasSeenOnboarding);
    }
    checkShouldShowOnboarding();
  }, []);

  React.useEffect(() => {
    setTimeout(() => { SplashScreen.hide(); }, 1000);
  }, [retrievedData])

  const AuthS = createNativeStackNavigator();
  const AuthStack = () => {
    return (
      <AuthS.Navigator screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
        <AuthS.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <AuthS.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <AuthS.Screen options={{ headerShown: false }} name="ResetPwd" component={ResetPwdScreen} />
      </AuthS.Navigator>
    )
  }

  const AppS = createNativeStackNavigator();
  const AppStack = () => {
    return (
      <AppS.Navigator>
        { isFirstTime && 
          <AppS.Screen options={{ headerShown: false }} name="Onboarding">
            {() => <OnboardingScreen onFinish={() => setIsFirstTime(false)}/>}
          </AppS.Screen>
        }
        <AppS.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      </AppS.Navigator>
    )
  }

  return (
    <UserProvider>
      <NavigationContainer>
        {token ? <AppStack/> : <AuthStack/>}
      </NavigationContainer>
    </UserProvider>
  );
}