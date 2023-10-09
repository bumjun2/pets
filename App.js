// App.js
import React from 'react';
import Home from './src/Home';
import Pets from './src/Pets';
import Shop from './src/Shop';
import MyPage from './src/MyPage';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ㅅ;빌"
          component={Home}
          options={{
            tabBarBadge: 3,
          }}></Tab.Screen>
        <Tab.Screen name="펫스" component={Pets}></Tab.Screen>
        <Tab.Screen name="상점" component={Shop}></Tab.Screen>
        <Tab.Screen name="내 정보" component={MyPage}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
