import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { useTodos } from '../hooks/useTodos';
import Todo from './Todo';

const Todos = () => {
  const { todos: data, removeTodo } = useTodos();

  return (
    <SwipeListView
      data={data}
      renderItem={({ item }) => <Todo item={item} />}
      keyExtractor={(item) => item.id}
      renderHiddenItem={({ item }) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => removeTodo(item.id)}
          >
            <Ionicons name="trash-outline" size={22} color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      stopRightSwipe={-75}
    />
  );
};

const styles = StyleSheet.create({
  rowBack: {
    minHeight: 45,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 75,
    backgroundColor: 'red',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});

export default Todos;
