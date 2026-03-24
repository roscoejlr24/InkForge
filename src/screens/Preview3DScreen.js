// Preview3DScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Preview3DScreen = () => {
    const handleBodyPlacement = (placement) => {
        console.log(`Selected body placement: ${placement}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>3D Body Placement Picker</Text>
            <Button title="Front" onPress={() => handleBodyPlacement('Front')} />
            <Button title="Back" onPress={() => handleBodyPlacement('Back')} />
            <Button title="Left" onPress={() => handleBodyPlacement('Left')} />
            <Button title="Right" onPress={() => handleBodyPlacement('Right')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Preview3DScreen;