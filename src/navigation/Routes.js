import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/Auth/Splash';
import LandingScreen from '../screens/Auth/Landing';
import LoginScreen from '../screens/Auth/Login';
import ConsentScreen from '../screens/Auth/Consent';
import SendOtpScreen from '../screens/Auth/SendOtp';
import SubmitOtpScreen from '../screens/Auth/SubmitOtp';
import PinSettingScreen from '../screens/Auth/PinSetting';
import {useSelector} from 'react-redux';
import {selectAuthReducer} from '../redux/slices/AuthSlice';
import PinLoginScreen from '../screens/Auth/PinLogin';
import TouchIDSettingScreen from '../screens/Auth/TouchIDSetting';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0000',
  },
};

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  // const {didShowSplash} = useSelector(selectAuthReducer);
  const didShowSplash = false;
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: '',
      }}
      initialRouteName={didShowSplash ? 'Login' : 'Splash'}>
      <AuthStack.Screen
        name={'Splash'}
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <AuthStack.Screen
        name={'Landing'}
        options={{headerShown: false}}
        component={LandingScreen}
      />
      <AuthStack.Screen name={'Consent'} component={ConsentScreen} />
      <AuthStack.Screen
        name={'Login'}
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <AuthStack.Screen name={'SendOtp'} component={SendOtpScreen} />
      <AuthStack.Screen name={'SubmitOtp'} component={SubmitOtpScreen} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      options={{headerShown: false}}
      name={'PinSetting'}
      component={PinSettingScreen}
    />
    <MainStack.Screen
      options={{headerShown: false}}
      name={'TouchIDSetting'}
      component={TouchIDSettingScreen}
    />
    <MainStack.Screen
      options={{headerShown: false}}
      name={'PinLogin'}
      component={PinLoginScreen}
    />
  </MainStack.Navigator>
);

const Routes = () => {
  const {isLogin} = useSelector(selectAuthReducer);
  return (
    <NavigationContainer theme={AppTheme}>
      {isLogin ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

export default Routes;
