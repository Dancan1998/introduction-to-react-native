import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalName) => {
    if (goalName !== "") {
      setCourseGoals((oldGoals) => [
        ...oldGoals,
        { id: Math.random().toString(), value: goalName },
      ]);
    }
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onCancel={cancelGoalHandler}
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemdata) => (
          <GoalItem
            onDelete={removeGoalHandler}
            id={itemdata.item.id}
            title={itemdata.item.value}
          />
        )}
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
