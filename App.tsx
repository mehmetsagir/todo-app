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
import { TodosContextProvider } from "./hooks/useTodos";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TodosContextProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Today's Todos</Text>
        <TodoList />
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={() => setIsOpen(true)}
        >
          <Ionicons name="add-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
      <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} />
    </TodosContextProvider>
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
