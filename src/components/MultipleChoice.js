import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const MultipleChoice = ({ question, options, correctAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const checkAnswer = () => {
        setIsCorrect(selectedOption === question.answer);
    };

    return (
        <View>
            <Text>{question.question}</Text>
            {question.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedOption(option)}
                    style={{
                        backgroundColor: selectedOption === option ? 'blue' : 'white',
                    }}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
            <Button title="Submit Answer" onPress={checkAnswer} />
            {isCorrect !== null && <Text>{isCorrect ? 'Correct!' : 'Incorrect!'}</Text>}
        </View>
    );
};

export default MultipleChoice;
