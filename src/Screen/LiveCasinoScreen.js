// FaziCasino 2026 - Live Casino & Slots UI
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import GameHub from '../logic/GameHub';

const LiveCasinoScreen = ({ onBack }) => {
    // Sirf "Live" aur "Slots" category ke games filter kar rahe hain
    const liveGames = GameHub.library.filter(g => g.category === 'Live' || g.category === 'Slots');

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Text style={styles.backBtn}>❮ Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>LIVE CASINO</Text>
                <View style={{ width: 50 }} /> 
            </View>

            <Text style={styles.subHeader}>Real-Time Tables & Hot Slots</Text>

            <FlatList
                data={liveGames}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.gameCard}>
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.cardIcon}>{item.category === 'Live' ? '🕴️' : '🎰'}</Text>
                        </View>
                        <View style={styles.infoArea}>
                            <Text style={styles.gameName}>{item.name}</Text>
                            <View style={styles.statusRow}>
                                <View style={styles.onlineDot} />
                                <Text style={styles.onlineText}>LIVE NOW</Text>
                            </View>
                            <Text style={styles.minBetText}>Min: PKR {item.minBet}</Text>
                        </View>
                        <TouchableOpacity style={styles.playBtn}>
                            <Text style={styles.playBtnText}>PLAY</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#050505', padding: 10 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
    backBtn: { color: '#FFD700', fontSize: 16, fontWeight: 'bold' },
    title: { color: '#fff', fontSize: 20, fontWeight: 'bold', letterSpacing: 2 },
    subHeader: { color: '#666', textAlign: 'center', marginBottom: 20, fontSize: 12, textTransform: 'uppercase' },
    gameCard: { flex: 1, backgroundColor: '#111', margin: 8, borderRadius: 15, overflow: 'hidden', borderWidth: 1, borderColor: '#222' },
    imagePlaceholder: { height: 100, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center' },
    cardIcon: { fontSize: 40 },
    infoArea: { padding: 12 },
    gameName: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
    statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
    onlineDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00FF00', marginRight: 5 },
    onlineText: { color: '#00FF00', fontSize: 10, fontWeight: 'bold' },
    minBetText: { color: '#aaa', fontSize: 10, marginTop: 5 },
    playBtn: { backgroundColor: '#FFD700', padding: 10, alignItems: 'center' },
    playBtnText: { color: '#000', fontWeight: 'bold', fontSize: 12 }
});

export default LiveCasinoScreen;
