import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.flashcard}>
        <Text style={styles.question}>{question.question}</Text>
        {showAnswer && <Text style={styles.answer}>{question.answer}</Text>}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.buttonText}>
          {showAnswer ? "Hide Answer" : "Reveal Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  flashcard: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "90%",
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  answer: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#841584",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Flashcard;
