import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as reactNative from 'react-native';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './hooks/useTodos';

reactNative.LogBox.ignoreLogs(['[react-native-gesture-handler]']);

export default function App() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <TodosContextProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Today&apos;s Todos</Text>
        <TodoList />
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={handlePresentModalPress}
        >
          <Ionicons name="add-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      <AddTodo bottomSheetModalRef={bottomSheetModalRef} />
    </TodosContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'center',
  },
  addTodoButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5463FF',
    borderRadius: 50,
  },
});
