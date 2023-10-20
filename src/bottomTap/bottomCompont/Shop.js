import React from 'react';
import {View} from 'react-native';
import Advertisement from '../../stackScreen/stackShop/Advertisement';
import Category from '../../stackScreen/stackShop/Category';

const Shop = () => {
  return (
    <View style={{flex: 1}}>
      <Advertisement />
      <Category />
    </View>
  );
};

export default Shop;
