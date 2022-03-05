import React from 'react';
import { StyleSheet, View } from 'react-native';
import Checkbox from 'react-native-bouncy-checkbox';

import { TodoProps } from '../hooks/useTodos';

const Todo = ({ item }: { item: TodoProps }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        style={{
          flex: 1,
        }}
        isChecked={item.completed}
        onPress={() => (item.completed = !item.completed)}
        text={item.title}
        fillColor="#0B5688"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 45,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 2,
  },
});

export default Todo;
