import { Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import { TodoProps } from "./TodoList";

type Props = {
  data: TodoProps;
};

const Todo: React.FC<Props> = ({ data }) => {
  const { text } = data;

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="white"
      onPress={() => console.log(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 18,
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "#000",
    fontSize: 18,
  },
});

export default Todo;
