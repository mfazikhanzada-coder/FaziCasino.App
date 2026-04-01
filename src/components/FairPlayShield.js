// FaziCasino 2026 - Fair Play & Security Shield Component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FairPlayShield = () => {
    return (
        <View style={styles.shieldContainer}>
            <View style={styles.iconBox}>
                <Text style={styles.shieldIcon}>🛡️</Text>
            </View>
            <View style={styles.textBox}>
                <Text style={styles.shieldTitle}>FAZI SECURE CORE</Text>
                <Text style={styles.shieldDesc}>128-bit Encryption | Provably Fair Gaming</Text>
            </View>
            <View style={styles.verifiedBox}>
                <Text style={styles.verifiedText}>VERIFIED</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shieldContainer: {
        flexDirection: 'row',
        backgroundColor: '#0a0a0a',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#222',
        alignItems: 'center',
        marginVertical: 10
    },
    iconBox: { marginRight: 12 },
    shieldIcon: { fontSize: 24 },
    textBox: { flex: 1 },
    shieldTitle: { color: '#FFD700', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
    shieldDesc: { color: '#666', fontSize: 8, marginTop: 2 },
    verifiedBox: {
        backgroundColor: '#004d00',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4
    },
    verifiedText: { color: '#00FF00', fontSize: 8, fontWeight: 'bold' }
});

export default FairPlayShield;
