import React from 'react';
import {Image, View} from 'react-native';

const MyPageImg = () => {
  return (
    <View>
      <Image source={require('../../assets/강아지.jpeg')} />
    </View>
  );
};

export default MyPageImg;
