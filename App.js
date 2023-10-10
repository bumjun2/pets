// App.js
import React, {useEffect} from 'react';
import Home from './src/Home';
import Pets from './src/Pets';
import Shop from './src/Shop';
import MyPage from './src/MyPage';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveBackgroundColor: 'pink',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="홈"
          component={Home}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({color}) => (
              <Icon name="home" size={32} color={color} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="펫스"
          component={Pets}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="search" size={32} color={color} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="상점"
          component={Shop}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="shopping-basket" size={32} color={color} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="내 정보"
          component={MyPage}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account-circle" size={32} color={color} />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
