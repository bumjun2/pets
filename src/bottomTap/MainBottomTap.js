import React from 'react';

import Shop from './bottomCompont/Shop';
import MyPage from './bottomCompont/MyPage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import StackHome from '../stackScreen/StackHome';
import StackPets from '../stackScreen/stackPets/StackPets';

const Tab = createMaterialBottomTabNavigator();
const MainBottomTap = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="pink">
      <Tab.Screen
        name="bottomHome"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="펫스"
        component={StackPets}
        options={{
          tabBarLabel: 'Pets',
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="상점"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-basket" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={MyPage}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTap;
