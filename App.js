import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalName) => {
    if (goalName !== "") {
      setCourseGoals((oldGoals) => [
        ...oldGoals,
        { id: Math.random().toString(), value: goalName },
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemdata) => <GoalItem title={itemdata.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
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
});
