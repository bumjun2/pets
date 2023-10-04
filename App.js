import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Head from './src/head/Head';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Head />;
};

export default App;
