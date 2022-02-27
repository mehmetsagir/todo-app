import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const AddTodo: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isVisible={isOpen}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{
        margin: 0,
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPressOut={() => {
          setIsOpen(false);
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <Text style={styles.title}>Add Todo</Text>
            <View style={styles.content}>
              <TextInput style={styles.input} placeholder="Write Todo" />
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 35,
    paddingBottom: 50,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  addButton: {
    height: 40,
    width: 40,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5463FF",
    borderRadius: 4,
  },
});
export default AddTodo;
