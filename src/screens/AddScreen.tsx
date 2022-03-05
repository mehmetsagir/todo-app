import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Container from '../components/Container';
import { useTodos } from '../hooks/useTodos';

const AddScreen = (props: DrawerContentComponentProps) => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleAddTodo = () => {
    if (!text.length) {
      Alert.alert('Please enter a todo!');
      return;
    }

    addTodo(text);
    setText('');
    props.navigation.navigate('Home');
  };

  return (
    <Container image={require('../assets/add.png')}>
      <TextInput
        style={styles.input}
        placeholder="Write todo"
        numberOfLines={2}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <TouchableOpacity onPress={() => handleAddTodo()} style={styles.button}>
        <Text style={styles.buttonText}>Add to Todo</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    height: 40,
    backgroundColor: '#0B5688',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddScreen;
