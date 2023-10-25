import React from 'react';
import {Text, View} from 'react-native';

const NewProduct = () => {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{color: 'pink', fontWeight: '700', fontSize: 20, padding: 10}}>
          Hot 신상품
        </Text>
        <Text style={{padding: 15, color: '#000'}}>전체보기</Text>
      </View>
    </View>
  );
};

export default NewProduct;
