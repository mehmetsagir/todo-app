import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { useTodos } from '../hooks/useTodos';
import Todo from './Todo';

type Props = {
  editButtonOnPress: (id: string) => void;
};

const Todos: React.FC<Props> = ({ editButtonOnPress }) => {
  const { todos: data, removeTodo } = useTodos();

  if (!data.length)
    return (
      <Text
        style={{
          textAlign: 'center',
          paddingTop: 16,
          fontSize: 16,
        }}
      >
        What's on your list today? 🎉
      </Text>
    );

  return (
    <SwipeListView
      data={data}
      renderItem={({ item }) => <Todo item={item} />}
      keyExtractor={(item) => item.id}
      renderHiddenItem={({ item }) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.btn, styles.editBtn]}
            onPress={() => editButtonOnPress(item.id)}
          >
            <Ionicons name="create-outline" size={22} color="#fff"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.deleteBtn]}
            onPress={() => removeTodo(item.id)}
          >
            <Ionicons name="trash-outline" size={22} color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-150}
      stopRightSwipe={-150}
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
    top: 0,
    bottom: 0,
    width: 75,
  },
  deleteBtn: {
    right: 0,
    backgroundColor: 'red',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  editBtn: {
    backgroundColor: '#0B5688',
    right: 75,
  },
});

export default Todos;
