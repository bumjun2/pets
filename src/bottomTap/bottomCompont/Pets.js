import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PetsImg from '../../stackScreen/stackPets/PetsImg';
import {ScrollView} from 'react-native-gesture-handler';

const Pets = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholder="🐶 이름을 입력하세요!!" style={styles.input} />
      </View>
      <ScrollView>
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
        <PetsImg navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 70,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#dddd',
    height: 40,
  },
});

export default Pets;
