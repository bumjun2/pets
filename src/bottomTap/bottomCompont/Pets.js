import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Pets = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholde="아무거나 입력하세요..." style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Pets;
