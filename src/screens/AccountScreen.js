import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Settings</Text>
            <View style={styles.section}>
                <Text style={styles.title}>Subscription Information</Text>
                <Text>Your current plan: Premium</Text>
                <Text>Renewal Date: 2026-04-01</Text>
                <Text>Status: Active</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default AccountScreen;