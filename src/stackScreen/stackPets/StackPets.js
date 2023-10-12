import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Pets from '../../bottomTap/bottomCompont/Pets';
import PetsImg from './PetsImg';
import PetsPost from './PetsPost';

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

      <Stack.Screen
        name="PetsPost"
        component={PetsPost}
        options={{
          title: 'Post',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackPets;
