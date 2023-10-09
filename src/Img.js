import React from 'react';
import {Text, View, Image} from 'react-native';

const Img = () => {
  return (
    <View>
      <Image
        source={require('../assets/aa.jpeg')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default Img;
