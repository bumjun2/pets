// App.js
import React, {useContext, useEffect, useState} from 'react';

import MainBottomTap from './src/bottomTap/MainBottomTap';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Context, {
  ContextProvider,
} from './src/stackScreen/stackShop/context/Context';
import StackLogin from './src/stackScreen/login/StackLogin';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ContextProvider>
      <NavigationContainer>
        <StackLogin />
        {/* <MainBottomTap /> */}
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
