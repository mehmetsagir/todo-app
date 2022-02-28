import { Ionicons } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTodos } from '../hooks/useTodos';

type Props = {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
};

const AddTodo: React.FC<Props> = ({ bottomSheetModalRef }) => {
  const [text, setText] = useState<string>('');
  const snapPoints = useMemo(() => ['25%'], []);

  const { addTodo } = useTodos();

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Add Todo</Text>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="Write Todo"
              value={String(text)}
              onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                if (!text) {
                  Alert.alert('Please enter a todo');
                  return;
                }
                addTodo(text);
                setText('');
              }}
            >
              <Ionicons name="add-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
    paddingBottom: 50,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  addButton: {
    height: 40,
    width: 40,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5463FF',
    borderRadius: 4,
  },
});
export default AddTodo;
