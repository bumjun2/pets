import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PostUser = () => {
  return (
    <View style={styles.continue}>
      <Image
        style={styles.userImage}
        source={require('../../../assets/강아지.jpeg')}
      />
      <Text style={styles.userName}>귀여운 강아지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flexDirection: 'row',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'red',
    marginTop: 10,
    marginLeft: 20,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 18,
    marginLeft: 20,
  },
});

export default PostUser;
