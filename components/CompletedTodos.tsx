import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { TodoProps } from "./TodoList";
import Todo from "./Todo";
import TodoActions from "./TodoActions";
import { useTodos } from "../hooks/useTodos";

const CompletedTodos: React.FC = () => {
  const { todos } = useTodos();
  const data: TodoProps[] = todos.filter((item) => item.completed);

  if (!data.length) return null;
  return (
    <SafeAreaView>
      <Text style={styles.title}>Completed Todos ✌️</Text>
      <SwipeListView
        data={data}
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

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 18,
  },
});

export default CompletedTodos;
