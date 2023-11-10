import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PetsImg from '../../stackScreen/stackPets/PetsImg';
import {ScrollView} from 'react-native-gesture-handler';
import realm from '../../realm/Realm';

const Pets = ({navigation}) => {
  const [click, setClick] = useState(false);
  const [text, setText] = useState('');
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const users = realm.objects('User').filtered('id = $0', text)[0];
    if (users) {
      setUserNames(users.id);
    } else {
      setUserNames('');
    }
  }, [text]);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="🐶 이름을 입력하세요!!"
          style={click ? styles.searchInput : styles.input}
          onFocus={() => setClick(true)}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 7,
          }}
          onPress={() => {
            setClick(false);
          }}>
          <Text>취소</Text>
        </TouchableOpacity>
      </View>
      {click ? (
        <Text>{userNames}</Text>
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 70,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffff',
    height: 40,
  },
  searchInput: {
    borderRadius: 10,
    backgroundColor: '#ffff',
    width: '90%',
  },
});

export default Pets;
