import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const FillInTheBlank = ({ question, answer }) => {
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    setIsCorrect(
      userInput.trim().toLowerCase() === question.answer.toLowerCase()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setUserInput}
        value={userInput}
        placeholder="Type your answer here"
      />
      <View style={styles.button}>
        <Button title="Check Answer" onPress={checkAnswer} color="#841584" />
      </View>
      {isCorrect !== null && (
        <Text style={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginBottom: 10,
  },
  correct: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
  incorrect: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FillInTheBlank;
