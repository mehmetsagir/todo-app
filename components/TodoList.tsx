import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import CompletedTodos from "./CompletedTodos";
import Todos from "./Todos";

export type TodoProps = {
  id: string;
  text: string;
  completed: boolean;
  createdDate: string;
};

const TodoList = () => {
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
      completed: true,
      createdDate: "2020-01-01",
    },
  ]);

  return (
    <SafeAreaView>
      <Todos data={todos.filter((item) => !item.completed)} />
      <CompletedTodos data={todos.filter((item) => item.completed)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
