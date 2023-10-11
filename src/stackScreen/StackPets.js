import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Pets from '../bottomTap/bottomCompont/Pets';

const Stack = createStackNavigator();

const StackPets = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pets"
        component={Pets}
        options={{
          headerShown: false,
          title: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackPets;
