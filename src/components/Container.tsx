import React from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';

import Header from './Header';

export type Props = {
  image: ImageSourcePropType;
};

const Container: React.FC<Props> = ({ image, children }) => {
  return (
    <>
      <Header image={image} />
      <View style={styles.container}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});

export default Container;
