// src/screens/SignupScreen.js
import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import realm from '../../realm/Realm';
const SignupScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAdrass] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    realm.write(() => {
      realm.create('User', {
        id: userId,
        password: password,
        address: address,
        username: username,
        userImg: '',
        nickName: '',
      });
    });
    navigation.navigate('NickName', userId);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="id"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="address"
        value={address}
        onChangeText={setAdrass}
      />

      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{width: '43%'}}>
          <Button title="다음 단계" onPress={handleSignup} />
        </View>
        <View style={{width: '43%'}}>
          <Button
            title="로그인화면"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default SignupScreen;
