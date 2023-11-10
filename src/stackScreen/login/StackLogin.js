import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './Login';
import Sinup from './Sinup';

const Stack = createStackNavigator();

const StackLogin = () => {
  return (
    <Stack.Navigator initialRouteName="Sinup">
      <Stack.Screen
        name="Sinup"
        component={Sinup}
        options={{
          title: 'Sinup',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackLogin;
