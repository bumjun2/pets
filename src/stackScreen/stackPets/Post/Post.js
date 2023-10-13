import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import PetsPost from './PetsPost';

import ModalTitle from './Modal/ModalTitle';
import ModalInput from './Modal/ModalInput';
import ModalList from './Modal/ModalList';

const Post = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModalToggle = () => {
    toggleModal();
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
            <ModalInput />
            <ModalList />
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
    backgroundColor: '#dddd',
    borderRadius: 30,
    width: 300,
    height: 500,
  },
});
export default Post;
