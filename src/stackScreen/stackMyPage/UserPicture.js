import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Context from '../stackShop/context/Context';

const UserPicture = ({changeText}) => {
  const {on, setOn} = useContext(Context);
  const base64Image = on.userImg;
  const decodedImage = base64Image
    ? `data:image/png;base64,${base64Image}`
    : null;
  const [respons, setRespons] = useState(decodedImage);

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
          <Image style={styles.circle} source={{uri: respons}} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={changeText}>
        <Text style={styles.font}>{changeText}</Text>
      </TouchableOpacity>
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
