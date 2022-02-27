import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { TodoProps } from "./TodoList";
import Todo from "./Todo";
import TodoActions from "./TodoActions";

type Props = {
  data: TodoProps[];
};

const Todos: React.FC<Props> = ({ data }) => {
  return (
    <SafeAreaView>
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

const styles = StyleSheet.create({});

export default Todos;
