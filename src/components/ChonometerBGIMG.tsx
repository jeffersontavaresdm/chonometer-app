import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const ChronometerBGIMG = () => {
  return (
    <View style={styles.imageView}>
      <Image
        source={require('../../assets/chonometer.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageView: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
});

export default ChronometerBGIMG;
