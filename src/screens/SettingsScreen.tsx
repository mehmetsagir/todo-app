import React from 'react';
import { Text, View } from 'react-native';

import Container from '../components/Container';

const SettingsScreen = () => {
  return (
    <Container image={require('../assets/settings.png')}>
      <Text>Settings Screen</Text>
    </Container>
  );
};

export default SettingsScreen;
