import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={(e) => setEnteredGoal(e)}
        />
        <Button title="CANCEL" color="red" onPress={onCancel} />
        <Button title="ADD" onPress={goalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
