import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Flashcard from "../components/Flashcard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

const FlashcardScreen = () => {
  const [flashcardQuestions, setFlashcardQuestions] = useState([]);

  useEffect(() => {
    fetch("https://damp-sands-89836.herokuapp.com/questions")
      .then((response) => response.json())
      .then((data) =>
        setFlashcardQuestions(data.filter((q) => q.type === "flashcard"))
      );
  }, []);

  return (
    <View style={styles.container}>
      {flashcardQuestions.map((question, index) => (
        <Flashcard key={index} question={question} />
      ))}
    </View>
  );
};

export default FlashcardScreen;
