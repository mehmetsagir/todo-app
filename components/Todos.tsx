import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Todo from "./Todo";
import TodoActions from "./TodoActions";

export type TodoProps = {
  id: string;
  text: string;
  completed: boolean;
  createdDate: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: "1",
      text: "Learn React Native",
      completed: false,
      createdDate: "2020-01-01",
    },
    {
      id: "2",
      text: "Learn React Native with Expo",
      completed: false,
      createdDate: "2020-01-01",
    },
  ]);

  return (
    <SafeAreaView>
      <SwipeListView
        data={todos}
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

const styles = StyleSheet.create({});

export default Todos;
