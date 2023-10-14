import React from 'react';
import {View} from 'react-native';
import UserPicture from '../../stackScreen/stackMyPage/UserPicture';

const MyPage = ({props, changText}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <UserPicture props={props} changText={changText} />
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default MyPage;
