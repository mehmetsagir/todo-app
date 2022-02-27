import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todos from "./components/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Today's Todos</Text>
      <Todos />
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
