import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Shop from '../../bottomTap/bottomCompont/Shop';
import Feed from './feed/Feed';
import Snack from './snack/Snack';
import Accessories from './accessories/Accessories';
import Shower from './shower/Shower';

const Stack = createStackNavigator();

const StackShop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: 'Shop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Feed',
        }}
      />
      <Stack.Screen
        name="Snack"
        component={Snack}
        options={{
          title: 'Snack',
        }}
      />
      <Stack.Screen
        name="Accessories"
        component={Accessories}
        options={{
          title: 'Accessories',
        }}
      />
      <Stack.Screen
        name="Shower"
        component={Shower}
        options={{
          title: 'Shower',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackShop;
