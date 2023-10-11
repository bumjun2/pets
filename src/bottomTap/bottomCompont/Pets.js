import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PetsImg from '../../stackScreen/stackPets/PetsImg';

const Pets = () => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholder="🐶 이름을 입력하세요!!" style={styles.input} />
      </View>
      <View>
        <PetsImg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    marginBottom: 0,
    marginTop: 70,
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 3,
  },
});

export default Pets;
