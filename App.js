// App.js
import React, {useEffect} from 'react';

import MainBottomTap from './src/bottomTap/MainBottomTap';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {ContextProvider} from './src/stackScreen/stackShop/context/Context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ContextProvider>
      <NavigationContainer>
        <MainBottomTap />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
