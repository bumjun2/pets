import React from 'react';
import {View} from 'react-native';
import Advertisement from '../../stackScreen/stackShop/Advertisement';
import Category from '../../stackScreen/stackShop/Category';
import NewProduct from '../../stackScreen/stackShop/newProduct/NewProduct';

const Shop = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Advertisement />
      <Category navigation={navigation} />
      <NewProduct />
    </View>
  );
};

export default Shop;
