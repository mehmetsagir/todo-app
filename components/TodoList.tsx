import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import CompletedTodos from "./CompletedTodos";
import Todos from "./Todos";

export type TodoProps = {
  id: string;
  text: string;
  completed: boolean;
  createdDate: string;
};

type Props = {
  todos: TodoProps[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <SafeAreaView>
      <Todos data={todos.filter((item) => !item.completed)} />
      <CompletedTodos data={todos.filter((item) => item.completed)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
