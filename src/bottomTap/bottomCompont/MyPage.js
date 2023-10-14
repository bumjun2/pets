import React from 'react';
import {View} from 'react-native';
import UserPicture from '../../stackScreen/stackMyPage/UserPicture';

const MyPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <UserPicture />
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default MyPage;
