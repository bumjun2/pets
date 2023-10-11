// App.js
import React, {useEffect} from 'react';

import MainBottomTap from './src/bottomTap/MainBottomTap';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainBottomTap />
    </NavigationContainer>
  );
};

export default App;
