import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MultipleChoice from "../components/MultipleChoice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

const MultipleChoiceScreen = () => {
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) =>
        setMultipleChoiceQuestions(
          data.filter((q) => q.type === "multiple-choice")
        )
      );
  }, []);

  return (
    <View style={styles.container}>
      {multipleChoiceQuestions.map((question, index) => (
        <MultipleChoice key={index} question={question} />
      ))}
    </View>
  );
};

export default MultipleChoiceScreen;
