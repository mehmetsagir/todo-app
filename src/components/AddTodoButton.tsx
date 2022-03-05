import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void;
};

const AddTodoButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="add-outline" size={24} color="#fff"></Ionicons>
    </TouchableOpacity>
  );
};

export default AddTodoButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#0B5688',
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
