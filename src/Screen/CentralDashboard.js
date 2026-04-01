// FaziCasino 2026 - Central Dashboard (The User-Friendly Interface)
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import GameHub from '../logic/GameHub'; // Games ki list yahan se ayegi

const CentralDashboard = ({ user, balance, onNavigate }) => {
    return (
        <ScrollView style={styles.container}>
            {/* Header: Balance & VIP Status */}
            <View style={styles.headerCard}>
                <View>
                    <Text style={styles.welcomeText}>Welcome, {user.email.split('@')[0]}!</Text>
                    <Text style={styles.vipBadge}>{user.vip} MEMBER 💎</Text>
                </View>
                <View style={styles.balanceBox}>
                    <Text style={styles.balanceLabel}>Main Balance</Text>
                    <Text style={styles.balanceAmount}>PKR {balance.toLocaleString()}</Text>
                </View>
            </View>

            {/* Quick Actions (Deposit/Withdraw) */}
            <View style={styles.actionRow}>
                <TouchableOpacity style={styles.actionBtn} onPress={() => onNavigate('CASHIER')}>
                    <Text style={styles.actionIcon}>➕</Text>
                    <Text style={styles.actionText}>Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn} onPress={() => onNavigate('CASHIER')}>
                    <Text style={styles.actionIcon}>💸</Text>
                    <Text style={styles.actionText}>Withdraw</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn} onPress={() => onNavigate('LIVE')}>
                    <Text style={styles.actionIcon}>🎥</Text>
                    <Text style={styles.actionText}>Live Table</Text>
                </TouchableOpacity>
            </View>

            {/* Games Library (Extensive Gaming Library) */}
            <Text style={styles.sectionTitle}>Popular Games</Text>
            <View style={styles.gameGrid}>
                {GameHub.library.map((game) => (
                    <TouchableOpacity key={game.id} style={styles.gameCard}>
                        {game.isNew && <View style={styles.newBadge}><Text style={styles.newText}>NEW</Text></View>}
                        <Text style={styles.gameIcon}>🎮</Text>
                        <Text style={styles.gameName}>{game.name}</Text>
                        <Text style={styles.gameCat}>{game.category}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Safety Reminder Footer */}
            <View style={styles.safetyBox}>
                <Text style={styles.safetyText}>🛡️ Play Responsibly. Set your daily limits in settings.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 15 },
    headerCard: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, borderBottomWidth: 3, borderBottomColor: '#FFD700' },
    welcomeText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    vipBadge: { color: '#FFD700', fontSize: 10, fontWeight: 'bold', marginTop: 5 },
    balanceBox: { alignItems: 'flex-end' },
    balanceLabel: { color: '#aaa', fontSize: 10 },
    balanceAmount: { color: '#FFD700', fontSize: 20, fontWeight: 'bold' },
    actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25 },
    actionBtn: { backgroundColor: '#111', width: '30%', padding: 15, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
    actionIcon: { fontSize: 20, marginBottom: 5 },
    actionText: { color: '#ccc', fontSize: 11, fontWeight: 'bold' },
    sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15, marginLeft: 5 },
    gameGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    gameCard: { backgroundColor: '#1a1a1a', width: '48%', padding: 20, borderRadius: 15, marginBottom: 15, alignItems: 'center', position: 'relative' },
    newBadge: { position: 'absolute', top: 10, right: 10, backgroundColor: '#FF4500', paddingHorizontal: 6, borderRadius: 5 },
    newText: { color: '#fff', fontSize: 8, fontWeight: 'bold' },
    gameIcon: { fontSize: 30, marginBottom: 10 },
    gameName: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
    gameCat: { color: '#666', fontSize: 10 },
    safetyBox: { padding: 20, marginTop: 10, marginBottom: 30 },
    safetyText: { color: '#444', fontSize: 10, textAlign: 'center', fontStyle: 'italic' }
});

export default CentralDashboard;
