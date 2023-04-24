import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import FillInTheBlank from "../components/FillInTheBlank";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

const FillInTheBlankScreen = () => {
  const [fillInTheBlankQuestions, setFillInTheBlankQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) =>
        setFillInTheBlankQuestions(
          data.filter((q) => q.type === "fill-in-the-blank")
        )
      );
  }, []);

  return (
    <View style={styles.container}>
      {fillInTheBlankQuestions.map((question, index) => (
        <FillInTheBlank key={index} question={question} />
      ))}
    </View>
  );
};

export default FillInTheBlankScreen;
