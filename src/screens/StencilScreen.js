import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StencilScreen = () => {
    const createStencil = () => {
        // Logic for creating a stencil
        console.log('Stencil created!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stencil Preview and Creation</Text>
            <Button title="Create Stencil" onPress={createStencil} />
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

export default StencilScreen;
