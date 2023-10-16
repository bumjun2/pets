import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UserFollow = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.font}>팔로워</Text>
        <Text style={styles.font}>팔로잉</Text>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
          <Text style={styles.font}>30</Text>
        </TouchableOpacity>
        <Text style={styles.font}>10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default UserFollow;
