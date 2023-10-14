import React from 'react';
import {Text, View} from 'react-native';
import UserPicture from '../../stackScreen/stackMyPage/UserPicture';

const MyPage = () => {
  return (
    <View style={{flex: 1}}>
      <UserPicture />
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 3, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default MyPage;
