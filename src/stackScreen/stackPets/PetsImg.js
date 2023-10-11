import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PetsImg = () => {
  const width_proportion = '32%';
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width_proportion,
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Text>사진들</Text>
      </View>
      <Image
        source={require('../../assets/강아지.jpeg')}
        style={{
          width: width_proportion,
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
        }}></Image>
      <View
        style={{
          width: width_proportion,
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Text>사진들</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default PetsImg;
