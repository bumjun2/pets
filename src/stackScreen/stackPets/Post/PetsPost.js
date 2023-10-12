import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PostUser from './PostUser';
import PostRiew from './PostRiew';
import {Modal} from 'react-native-paper';

const PetsPost = () => {
  return (
    <View style={styles.continue}>
      <View style={styles.postUser}>
        <PostUser />
      </View>
      <View style={styles.imgSet}>
        <Image
          style={styles.img}
          source={require('../../../assets/강아지.jpeg')}
        />
      </View>
      <View style={styles.review}>
        <PostRiew />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flex: 1,
  },
  postUser: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgSet: {
    flex: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  review: {
    backgroundColor: 'white',
    flex: 1,
  },
  continue1: {
    flex: 2,
    backgroundColor: 'gray',
  },
});

export default PetsPost;
