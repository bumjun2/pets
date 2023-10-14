import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MyPage from '../../bottomTap/bottomCompont/MyPage';
import User from './User';

const Stack = createStackNavigator();

const StackMyPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={User}
        options={{
          title: 'MyPage',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackMyPage;
