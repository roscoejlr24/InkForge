// PaywallScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaywallScreen = () => {
    // Dummy function for handling subscription logic
    const handleSubscribe = () => {
        // Logic for subscription
        console.log('User subscribed!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Premium Subscription</Text>
            <Text style={styles.price}>$9.99 per month</Text>
            <Text style={styles.featuresTitle}>Features:</Text>
            <Text style={styles.features}>- Ad-free experience\n- Access to premium content\n- Exclusive member-only features</Text>
            <Button title="Subscribe Now" onPress={handleSubscribe} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        marginVertical: 10,
    },
    featuresTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    features: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default PaywallScreen;