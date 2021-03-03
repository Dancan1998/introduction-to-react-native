import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    if (enteredGoal !== "") {
      setCourseGoals((oldGoals) => [...oldGoals, enteredGoal]);
    }
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={(e) => setEnteredGoal(e)}
        />
        <Button title="ADD" style={styles.button} onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal, index) => {
          return (
            <View style={styles.listItem} key={index}>
              <Text>{goal}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "red",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
  },
});
// <StatusBar style="auto" />;
