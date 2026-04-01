// FaziCasino 2026 - Daily Rewards & Bonuses Pop-up
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const DailyBonusModal = ({ visible, onClose, onClaim }) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.giftIcon}>🎁</Text>
                    <Text style={styles.title}>Daily Reward!</Text>
                    <Text style={styles.desc}>Welcome back! Your daily login bonus is ready to claim.</Text>
                    
                    <View style={styles.rewardCard}>
                        <Text style={styles.rewardLabel}>Cash Prize</Text>
                        <Text style={styles.rewardAmt}>PKR 50.00</Text>
                    </View>

                    <TouchableOpacity style={styles.claimBtn} onPress={() => { onClaim(50); onClose(); }}>
                        <Text style={styles.btnText}>CLAIM NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Text style={styles.closeText}>Maybe Later</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center', alignItems: 'center' },
    modalBox: { backgroundColor: '#111', width: '85%', padding: 25, borderRadius: 25, alignItems: 'center', borderWidth: 2, borderColor: '#FFD700' },
    giftIcon: { fontSize: 60, marginBottom: 15 },
    title: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
    desc: { color: '#888', textAlign: 'center', marginVertical: 15, fontSize: 13 },
    rewardCard: { backgroundColor: '#1a1a1a', padding: 15, borderRadius: 15, width: '100%', alignItems: 'center', marginBottom: 25 },
    rewardLabel: { color: '#FFD700', fontSize: 10, fontWeight: 'bold' },
    rewardAmt: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
    claimBtn: { backgroundColor: '#FFD700', width: '100%', padding: 18, borderRadius: 12, alignItems: 'center' },
    btnText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    closeBtn: { marginTop: 15 },
    closeText: { color: '#555', fontSize: 12 }
});

export default DailyBonusModal;
