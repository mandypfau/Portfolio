import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FlashcardScreen from "./src/screens/FlashcardScreen";
import FillInTheBlankScreen from "./src/screens/FillInTheBlankScreen";
import MultipleChoiceScreen from "./src/screens/MultipleChoiceScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Flashcard" component={FlashcardScreen} />
        <Stack.Screen name="FillInTheBlank" component={FillInTheBlankScreen} />
        <Stack.Screen name="MultipleChoice" component={MultipleChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
