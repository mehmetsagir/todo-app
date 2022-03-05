import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Props } from './Container';

const Header: React.FC<Props> = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#0B5688',
    // backgroundColor: '#21C392',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Header;
