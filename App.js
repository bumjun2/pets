// App.js
import React from 'react';
import Img from './src/Img';
import {StyleSheet, View, Text} from 'react-native';

function App() {
  return (
    <View style={styles.contiune}>
      <Text>아침에 사과</Text>
      <Img />
    </View>
  );
}

const styles = StyleSheet.create({
  contiune: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
