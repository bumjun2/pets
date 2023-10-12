import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostRiew = () => {
  const [inputIcon, setInputIcon] = useState(false);
  const [starIcon, setStarIcon] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setInputIcon(!inputIcon);
  };
  const starHandler = () => {
    setStarIcon(!starIcon);
  };
  const modelHandler = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={handleIconPress} style={{marginTop: 10}}>
        <Icon
          name={inputIcon ? 'thumb-up-alt' : 'thumb-up-off-alt'}
          size={40}
          color={'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={modelHandler}
        style={{marginTop: 10, marginLeft: 10}}>
        <Icon name="question-answer" size={40} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={starHandler}
        style={{marginTop: 10, marginLeft: 250}}>
        <Icon
          name={starIcon ? 'turned-in' : 'turned-in-not'}
          size={40}
          color={'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  module: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});

export default PostRiew;
