import React, {useState} from 'react';
import {Alert, FlatList, Modal, StyleSheet, Text, View} from 'react-native';

import PetsPost from './PetsPost';

import ModalTitle from './Modal/ModalTitle';
import ModalInput from './Modal/ModalInput';
import ModalList from './Modal/ModalList';
import {ScrollView} from 'react-native-gesture-handler';

const Post = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

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
    ModalLists(newText);
  };
  const commentHandler = () => {
    comment();
  };
  const comment = () => {
    setComments(prevComments => [
      ...prevComments,
      {id: comments.length + 1, text: text},
    ]);
    setText('');
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
              text={text}
            />
            <ScrollView>
              <FlatList
                data={comments}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <ModalList text={item.text} />}
              />
            </ScrollView>
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
