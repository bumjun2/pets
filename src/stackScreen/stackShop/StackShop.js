import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Shop from '../../bottomTap/bottomCompont/Shop';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const StackShop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: 'Shop',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackShop;
