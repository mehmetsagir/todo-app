import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TodoProps } from "./Todos";

type Props = {
  data: TodoProps;
};

const TodoActions: React.FC<Props> = ({ data }) => {
  const { text, completed } = data;
  const handleCompleted = () => {
    Alert.alert(`Completed ${text}`);
  };
  const handleRemoveCompleted = () => {
    Alert.alert(`Remove Completed ${text}`);
  };
  const handleDeleted = () => {
    Alert.alert(`Deleted ${text}`);
  };

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.btn, styles.deleteBtn]}
        onPress={() => handleDeleted()}
      >
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.completeBtn]}
        onPress={() =>
          completed ? handleRemoveCompleted() : handleCompleted()
        }
      >
        <Ionicons
          name={completed ? "close-outline" : "checkmark-done-outline"}
          size={completed ? 30 : 24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 18,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: 75,
  },
  completeBtn: {
    right: 0,
    backgroundColor: "#077b8a",
  },
  deleteBtn: {
    left: 0,
    backgroundColor: "#da1212",
  },
});

export default TodoActions;
