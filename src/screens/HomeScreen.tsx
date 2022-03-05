import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';

import AddTodoButton from '../components/AddTodoButton';
import Container from '../components/Container';
import Todos from '../components/Todos';

const HomeScreen = (props: DrawerContentComponentProps) => (
  <Container image={require('../assets/home.png')}>
    <Todos
      editButtonOnPress={(id: string) =>
        props.navigation.navigate('Add', { id })
      }
    />
    <AddTodoButton onPress={() => props.navigation.navigate('Add')} />
  </Container>
);

export default HomeScreen;
