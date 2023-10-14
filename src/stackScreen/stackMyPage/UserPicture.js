import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserPicture = () => {
  const [respons, setRespons] = useState(null);
  const onAddImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) return;
        setRespons(res);
      },
    );
  };
  return (
    <View style={styles.continue}>
      <TouchableOpacity onPress={onAddImage}>
        {respons === null ? (
          <Icon name="person" size={100} color={'black'} />
        ) : (
          <Image
            style={styles.circle}
            source={{uri: respons?.assets[0]?.uri}}
          />
        )}
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.font}>귀여운 강아지</Text>
        <Icon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    marginTop: 20,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  font: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default UserPicture;
