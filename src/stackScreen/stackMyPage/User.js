import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import MyPage from '../../bottomTap/bottomCompont/MyPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [changeText, setChangeText] = useState('아침에 사과');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const modalHandler = () => {
    toggleModal();
  };
  const changeHandler = () => {
    setChangeText(changeText);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <MyPage
        props={modalHandler}
        changeText={changeText}
        navigation={navigation}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!isModalVisible);
                }}>
                <Icon name="highlight-off" size={30} color={'red'} />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}>
                수정할 이름을 적어주세요
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 3,
                  width: 200,
                  marginLeft: 50,
                }}
                onChangeText={newtext => setChangeText(newtext)}
                value={changeText}
              />
              <Pressable
                style={{
                  width: 100,
                  height: 30,
                  borderRadius: 4,
                  backgroundColor: 'black',
                  marginTop: 10,
                  marginLeft: 100,
                }}
                onPress={changeHandler}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                  완료
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default User;
