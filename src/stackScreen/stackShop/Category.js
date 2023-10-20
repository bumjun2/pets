import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Category = () => {
  return (
    <View
      style={{
        flex: 0.4,
        backgroundColor: 'pink',
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginTop: 10,
    marginBottom: 10,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});

export default Category;
