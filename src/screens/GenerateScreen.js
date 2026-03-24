// GenerateScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const GenerateScreen = () => {
    const generateTattoo = () => {
        // Placeholder functionality: Generate a random tattoo design
        const designs = ['Dragon', 'Rose', 'Skull', 'Phoenix', 'Butterfly'];
        const randomDesign = designs[Math.floor(Math.random() * designs.length)];
        alert(`Tattoo Design: ${randomDesign}`);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to Tattoo Generator!</Text>
            <Button title="Generate Tattoo" onPress={generateTattoo} />
        </View>
    );
};

export default GenerateScreen;