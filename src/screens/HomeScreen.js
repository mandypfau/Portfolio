import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

const HomeScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Study App</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Flashcard")}>
        <Text>Flashcards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FillInTheBlank")}>
        <Text>Fill in the Blank</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MultipleChoice")}>
        <Text>Multiple Choice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
