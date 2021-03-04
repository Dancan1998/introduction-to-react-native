import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={(e) => setEnteredGoal(e)}
      />
      <Button title="ADD" onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
