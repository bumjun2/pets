import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const Advertisement = () => {
  const [hover, setHover] = useState(false);
  const images = [
    require('../../assets/강아지.jpeg'),
    require('../../assets/고양이.jpeg'),
    require('../../assets/알파카.jpeg'),
  ];

  const handleMouse = () => {
    setHover(!hover);
  };

  return (
    <TouchableOpacity onPress={handleMouse}>
      <View style={styles.container}>
        <Swiper
          autoplay
          autoplayTimeout={2.5}
          showsButtons={hover}
          showsPagination={hover}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}>
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
  },
  dotStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Advertisement;
