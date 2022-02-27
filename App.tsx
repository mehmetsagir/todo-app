import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Today's Todos</Text>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 12,
    textAlign: "center",
  },
});
