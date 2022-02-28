import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { useTodos } from '../hooks/useTodos';
import Todo from './Todo';
import TodoActions from './TodoActions';
import { TodoProps } from './TodoList';

const Todos: React.FC = () => {
  const { todos } = useTodos();
  const data: TodoProps[] = todos.filter((item) => !item.completed);

  if (!data.length)
    return (
      <Text style={styles.text}>You&apos;ve completed your to-do list 🥳</Text>
    );

  return (
    <SafeAreaView>
      <SwipeListView
        data={data}
        renderItem={({ item, index }) => <Todo data={item} key={index} />}
        renderHiddenItem={({ item }) => <TodoActions data={item} />}
        keyExtractor={(item) => item.id}
        leftOpenValue={75}
        rightOpenValue={-75}
        stopLeftSwipe={75}
        stopRightSwipe={-75}
      />
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

export default Todos;
