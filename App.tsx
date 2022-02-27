import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import TodoList, { TodoProps } from "./components/TodoList";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleAddTodo = (todo: TodoProps) => {
    if (!todo) return;
    setTodos([...todos, todo]);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Today's Todos</Text>
        <TodoList todos={todos} />
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={() => setIsOpen(true)}
        >
          <Ionicons name="add-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
      <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} addTodo={handleAddTodo} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 12,
    textAlign: "center",
  },
  addTodoButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5463FF",
    borderRadius: 50,
  },
});
