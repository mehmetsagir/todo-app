import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useTodos } from '../hooks/useTodos';
import { TodoProps } from './TodoList';

type Props = {
  data: TodoProps;
};

const TodoActions: React.FC<Props> = ({ data }) => {
  const { id, completed } = data;

  const { removeTodo, completedToggleTodo } = useTodos();

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.btn, styles.deleteBtn]}
        onPress={() => removeTodo(id)}
      >
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.completeBtn]}
        onPress={() => completedToggleTodo(id)}
      >
        <Ionicons
          name={completed ? 'close-outline' : 'checkmark-done-outline'}
          size={completed ? 30 : 24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: 75,
  },
  completeBtn: {
    right: 0,
    backgroundColor: '#077b8a',
  },
  deleteBtn: {
    left: 0,
    backgroundColor: '#da1212',
  },
});

export default TodoActions;
