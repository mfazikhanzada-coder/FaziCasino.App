// FAZI CASINO 2026 - ADMIN PRO MAX (Updated with Ban & Notification)
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const AdminMasterPanel = () => {
    const [msg, setMsg] = useState(''); // For Push Notifications
    
    // --- USER DATABASE (Extended with Ban Status) ---
    const [users, setUsers] = useState([
        { id: "FZ_101", email: "user1@gmail.com", balance: 50, status: "Active", isBanned: false },
        { id: "FZ_102", email: "scammer_99@test.com", balance: 0, status: "Offline", isBanned: true }
    ]);

    // 1. Push Notification Function (Broadcast)
    const sendGlobalNotification = () => {
        if(msg.length < 5) {
            Alert.alert("Error", "Message bohat chota hai!");
            return;
        }
        Alert.alert("Success", `Notification bheji gayi: "${msg}"`);
        setMsg(''); // Clear input
    };

    // 2. Ban/Unban Logic
    const toggleBan = (userId) => {
        const updatedUsers = users.map(u => {
            if(u.id === userId) return { ...u, isBanned: !u.isBanned };
            return u;
        });
        setUsers(updatedUsers);
        Alert.alert("Authority Update", `User ${userId} ka status tabdeel kar diya gaya.`);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.mainTitle}>FAZI CONTROL CENTER 🛡️</Text>

            {/* --- SECTION 1: GLOBAL BROADCAST --- */}
            <View style={styles.broadcastBox}>
                <Text style={styles.sectionTitle}>Send Announcement (All Users)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="E.g. New Game 'Fazi Crash' is Live! Get 10% Bonus."
                    placeholderTextColor="#555"
                    value={msg}
                    onChangeText={setMsg}
                />
                <TouchableOpacity style={styles.sendBtn} onPress={sendGlobalNotification}>
                    <Text style={styles.sendBtnText}>🚀 SEND TO ALL USERS</Text>
                </TouchableOpacity>
            </View>

            {/* --- SECTION 2: USER MANAGEMENT (With Ban Feature) --- */}
            <Text style={styles.sectionTitle}>User Management & Security</Text>
            {users.map((u) => (
                <View key={u.id} style={[styles.userRow, u.isBanned && styles.bannedRow]}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.userEmail}>{u.email}</Text>
                        <Text style={styles.userId}>ID: {u.id} | Balance: PKR {u.balance}</Text>
                    </View>
                    
                    <View style={styles.actionGroup}>
                        <TouchableOpacity 
                            style={[styles.banBtn, u.isBanned ? styles.unbanColor : styles.banColor]} 
                            onPress={() => toggleBan(u.id)}
                        >
                            <Text style={styles.btnText}>{u.isBanned ? "UNBAN" : "BAN USER"}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.btnText}>EDIT ✏️</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}

            {/* --- SECTION 3: SYSTEM HEALTH --- */}
            <View style={styles.healthCard}>
                <Text style={styles.healthText}>Server Status: 🟢 Stable</Text>
                <Text style={styles.healthText}>Database Sync: 100%</Text>
                <Text style={styles.healthText}>Auto-Payouts: Active</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#050505', padding: 15 },
    mainTitle: { color: '#FFD700', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 25 },
    broadcastBox: { backgroundColor: '#111', padding: 20, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#333' },
    sectionTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
    input: { backgroundColor: '#000', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, borderBottomWidth: 2, borderBottomColor: '#FFD700' },
    sendBtn: { backgroundColor: '#FFD700', padding: 15, borderRadius: 10, alignItems: 'center' },
    sendBtnText: { color: '#000', fontWeight: 'bold' },
    userRow: { backgroundColor: '#111', padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    bannedRow: { opacity: 0.5, borderColor: '#ff0000', borderWidth: 1 },
    userEmail: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
    userId: { color: '#888', fontSize: 11, marginTop: 4 },
    actionGroup: { flexDirection: 'row' },
    banBtn: { paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5, marginRight: 8 },
    banColor: { backgroundColor: '#d63031' },
    unbanColor: { backgroundColor: '#00b894' },
    editBtn: { backgroundColor: '#2d3436', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5 },
    btnText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
    healthCard: { marginTop: 30, padding: 15, borderTopWidth: 1, borderTopColor: '#222' },
    healthText: { color: '#444', fontSize: 12, marginBottom: 5 }
});

export default AdminMasterPanel;
