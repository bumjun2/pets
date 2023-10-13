import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Alert} from 'react-native';

const ModalInput = ({handlerModalList, commentHandler}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder="🐶 댓글을 달아주세요!!"
        onChangeText={newtext => handlerModalList(newtext)}
        style={styels.input}
      />
      <Button
        title="추가"
        style={styels.button}
        onPress={commentHandler}></Button>
    </View>
  );
};

const styels = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#ffff',
    width: 255,
  },
  button: {
    backgroundColor: 'blue',
  },
});

export default ModalInput;
