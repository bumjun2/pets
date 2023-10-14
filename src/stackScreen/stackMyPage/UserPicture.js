import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserPicture = () => {
  return (
    <View style={styles.continue}>
      <TouchableOpacity>
        <Icon name="face" size={100} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserPicture;
