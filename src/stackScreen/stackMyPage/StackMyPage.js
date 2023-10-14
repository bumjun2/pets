import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MyPage from '../../bottomTap/bottomCompont/MyPage';

const Stack = createStackNavigator();

const StackMyPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: 'MyPage',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackMyPage;
