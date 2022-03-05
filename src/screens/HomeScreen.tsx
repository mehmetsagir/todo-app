import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from '../components/Container';

const HomeScreen = () => {
  return (
    <>
      <Container image={require('../assets/home.png')}>
        <Text>HomeScreen</Text>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
