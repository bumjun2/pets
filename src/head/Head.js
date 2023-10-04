import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './HeadCss';

const Head = () => {
  return (
    <View styls={styles.continer}>
      <Text style={styles.log}>로고</Text>
    </View>
  );
};

export default Head;
