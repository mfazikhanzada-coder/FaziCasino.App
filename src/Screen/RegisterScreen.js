// FaziCasino 2026 - Registration UI Screen
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Auth from '../logic/AuthManager'; // Pehle wali logic file se connect kar rahe hain

const RegisterScreen = ({ onRegisterSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referral, setReferral] = useState('');

    const handleSignUp = () => {
        const result = Auth.createAccount(email, password, referral);
        
        if (result.success) {
            Alert.alert("Mubarak!", result.message);
            // Jab account ban jaye to dashboard par bhejo
            onRegisterSuccess(result.userData);
        } else {
            Alert.alert("Ghalti", result.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>FAZI CASINO</Text>
            <Text style={styles.subTitle}>Create Account in Seconds ⚡</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Email Address" 
                    placeholderTextColor="#666"
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Strong Password (min 6)" 
                    placeholderTextColor="#666"
                    secureTextEntry 
                    onChangeText={setPassword}
                />
                <TextInput 
                    style={[styles.input, {borderColor: '#FFD700', borderWidth: 1}]} 
                    placeholder="Referral Code (Optional)" 
                    placeholderTextColor="#FFD700"
                    onChangeText={setReferral}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>REGISTER NOW</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footer}>Safe & Secure Gaming Environment 🛡️</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 20 },
    logo: { color: '#FFD700', fontSize: 36, fontWeight: 'bold', textAlign: 'center' },
    subTitle: { color: '#fff', textAlign: 'center', marginBottom: 30, fontSize: 14 },
    inputContainer: { backgroundColor: '#111', padding: 20, borderRadius: 15 },
    input: { backgroundColor: '#222', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
    button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 10, alignItems: 'center' },
    buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    footer: { color: '#444', textAlign: 'center', marginTop: 20, fontSize: 11 }
});

export default RegisterScreen;
