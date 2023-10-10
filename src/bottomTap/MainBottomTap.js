import React from 'react';
import Home from '../bottomTap/bottomCompont/Home';
import Pets from '../bottomTap/bottomCompont/Pets';
import Shop from '../bottomTap/bottomCompont/Shop';
import MyPage from '../bottomTap/bottomCompont/MyPage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const MainBottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="펫스"
        component={Pets}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => (
            <Icon name="search" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="상점"
        component={Shop}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-basket" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={MyPage}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTap;
