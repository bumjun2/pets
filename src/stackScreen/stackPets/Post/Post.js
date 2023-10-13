import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View} from 'react-native';

import PetsPost from './PetsPost';

import ModalTitle from './Modal/ModalTitle';
import ModalInput from './Modal/ModalInput';
import ModalList from './Modal/ModalList';

const Post = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [add, setAdd] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModalToggle = () => {
    toggleModal();
  };

  const ModalLists = newText => {
    setText(newText);
  };
  const handlerModalList = newText => {
    if (add) {
      ModalLists(newText);
    }
  };
  const commentHandler = () => {
    comment();
  };
  const comment = () => {
    setAdd(!add);
    Alert.alert('누름');
    setAdd(false);
  };

  return (
    <View style={{flex: 1}}>
      <PetsPost onModalToggle={handleModalToggle} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalTitle
              setModalVisible={setModalVisible}
              isModalVisible={isModalVisible}
            />
            <ModalInput
              handlerModalList={handlerModalList}
              commentHandler={commentHandler}
            />
            <ModalList text={text} />
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
  modalView: {
    backgroundColor: '#cccc',
    borderRadius: 30,
    width: 300,
    height: 500,
  },
});
export default Post;
