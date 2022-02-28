import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { useTodos } from '../hooks/useTodos';
import CompletedTodos from './CompletedTodos';
import Todos from './Todos';

export type TodoProps = {
  id: string;
  text: string;
  completed: boolean;
  createdDate: string;
};

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  if (!todos.length)
    return (
      <Text style={styles.text}>
        You didn&apos;t add anything to-do for today. 🥺
      </Text>
    );
  return (
    <SafeAreaView>
      <Todos />
      <CompletedTodos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 18,
    marginTop: 5,
  },
});

export default TodoList;
