import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View, Button} from 'react-native';

const ModalInput = () => {
  const [text, SetText] = useState('');
  const textIn = () => {
    Alert.alert(text);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder="🐶 댓글을 달아주세요!!"
        onChangeText={newText => SetText(newText)}
        style={styels.input}
      />
      <Button title="추가" onPress={textIn} style={styels.button}></Button>
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
