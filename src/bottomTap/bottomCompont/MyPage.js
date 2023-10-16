import React from 'react';
import {View} from 'react-native';
import UserPicture from '../../stackScreen/stackMyPage/UserPicture';
import UserFollow from '../../stackScreen/stackMyPage/UserFollow';

const MyPage = ({props, changeText, navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <UserPicture props={props} changeText={changeText} />
      <UserFollow navigation={navigation} />
      <View style={{flex: 2, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default MyPage;
