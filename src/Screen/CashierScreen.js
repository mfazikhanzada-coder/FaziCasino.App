// FaziCasino 2026 - Cashier & Payments UI (Updated with MUHAMMAD ADA's Accounts)
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import Payments from '../logic/PaymentEngine'; 

const CashierScreen = ({ balance, onBack }) => {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('JazzCash');

    const handleWithdraw = () => {
        const amt = parseFloat(amount);
        const result = Payments.requestWithdrawal(balance, amt, method);
        
        if (result.success) {
            Alert.alert(
                "Request Received", 
                `Apki ${method} withdrawal request bhej di gayi hai.\n\nTotal Deduction: PKR ${amt + result.feeCharged} (Includes 2% fee)`
            );
        } else {
            Alert.alert("Error", result.message);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={onBack} style={styles.backBtn}>
                <Text style={styles.backText}>← Back to Home</Text>
            </TouchableOpacity>

            <Text style={styles.header}>Fazi Cashier</Text>
            
            <View style={styles.balanceCard}>
                <Text style={styles.balLabel}>Available Balance</Text>
                <Text style={styles.balAmt}>PKR {balance.toLocaleString()}</Text>
            </View>

            {/* Payment Method Selector */}
            <Text style={styles.sectionTitle}>Select Method</Text>
            <View style={styles.methodRow}>
                <TouchableOpacity 
                    style={[styles.methodBtn, method === 'JazzCash' && styles.activeMethod]} 
                    onPress={() => setMethod('JazzCash')}
                >
                    <Text style={styles.methodText}>JazzCash</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.methodBtn, method === 'EasyPaisa' && styles.activeMethod]} 
                    onPress={() => setMethod('EasyPaisa')}
                >
                    <Text style={styles.methodText}>EasyPaisa</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.methodBtn, method === 'Bank' && styles.activeMethod, {width: '100%', marginTop: 10}]} 
                    onPress={() => setMethod('Bank')}
                >
                    <Text style={styles.methodText}>HBL Bank Transfer</Text>
                </TouchableOpacity>
            </View>

            {/* Input Section */}
            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter Amount (Min 500)"
                    placeholderTextColor="#444"
                    keyboardType="numeric"
                    onChangeText={setAmount}
                />
                <Text style={styles.feeNote}>* 2% withdrawal fee applies.</Text>
            </View>

            <TouchableOpacity style={styles.withdrawBtn} onPress={handleWithdraw}>
                <Text style={styles.btnText}>WITHDRAW NOW</Text>
            </TouchableOpacity>

            {/* --- DEPOSIT DETAILS SECTION --- */}
            <View style={styles.depositInfo}>
                <Text style={styles.depTitle}>OFFICIAL DEPOSIT ACCOUNTS</Text>
                
                <View style={styles.accRow}>
                    <Text style={styles.accLabel}>JazzCash / EasyPaisa:</Text>
                    <Text style={styles.accVal}>03273760674</Text>
                </View>

                <View style={styles.bankBox}>
                    <Text style={styles.bankTitle}>HBL Bank Details:</Text>
                    <Text style={styles.bankText}>Title: <Text style={styles.whiteText}>MUHAMMAD ADA</Text></Text>
                    <Text style={styles.bankText}>IBAN: <Text style={styles.whiteText}>PK37HABB0011197901099899</Text></Text>
                </View>

                <Text style={styles.instructions}>
                    ⚠️ Send screenshot to support after transfer for instant chips.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20 },
    backBtn: { marginTop: 20, marginBottom: 10 },
    backText: { color: '#FFD700', fontSize: 14 },
    header: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
    balanceCard: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 20, borderLeftWidth: 4, borderLeftColor: '#FFD700' },
    balLabel: { color: '#888', fontSize: 12 },
    balAmt: { color: '#FFD700', fontSize: 32, fontWeight: 'bold' },
    sectionTitle: { color: '#aaa', fontSize: 12, marginBottom: 10, fontWeight: 'bold' },
    methodRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
    methodBtn: { width: '48%', padding: 15, borderRadius: 10, backgroundColor: '#111', alignItems: 'center', borderWidth: 1, borderColor: '#333' },
    activeMethod: { borderColor: '#FFD700', backgroundColor: '#1a1a1a' },
    methodText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
    inputArea: { marginBottom: 20 },
    input: { backgroundColor: '#111', color: '#fff', padding: 15, borderRadius: 10, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#FFD700' },
    feeNote: { color: '#666', fontSize: 10, marginTop: 5 },
    withdrawBtn: { backgroundColor: '#FFD700', padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 30 },
    btnText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    depositInfo: { padding: 20, backgroundColor: '#0a0a0a', borderRadius: 15, borderWidth: 1, borderColor: '#222', marginBottom: 50 },
    depTitle: { color: '#FFD700', fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginBottom: 15 },
    accRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#1a1a1a', paddingBottom: 5 },
    accLabel: { color: '#888', fontSize: 12 },
    accVal: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
    bankBox: { backgroundColor: '#111', padding: 12, borderRadius: 10, marginTop: 5 },
    bankTitle: { color: '#FFD700', fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
    bankText: { color: '#888', fontSize: 11, marginBottom: 3 },
    whiteText: { color: '#fff', fontWeight: 'bold' },
    instructions: { color: '#444', fontSize: 10, textAlign: 'center', marginTop: 15, fontStyle: 'italic' }
});

export default CashierScreen;
