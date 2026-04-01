// FAZI CASINO 2026 - MAIN APP ENTRY POINT
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

// 1. Importing Screens
import RegisterScreen from './src/screens/RegisterScreen';
import CentralDashboard from './src/screens/CentralDashboard';
import CashierScreen from './src/screens/CashierScreen';
import LiveCasinoScreen from './src/screens/LiveCasinoScreen';

// 2. Importing Components
import DailyBonusModal from './src/components/DailyBonusModal';
import FairPlayShield from './src/components/FairPlayShield';

const App = () => {
    // --- APP STATE ---
    const [user, setUser] = useState(null); // User Logged-in info
    const [balance, setBalance] = useState(0);
    const [currentScreen, setCurrentScreen] = useState('REGISTER');
    const [showBonus, setShowBonus] = useState(false);

    // --- LOGIC CONNECTIONS ---
    
    // Jab user Register kar le
    const handleAuth = (userData) => {
        setUser(userData);
        setBalance(userData.balance);
        setCurrentScreen('DASHBOARD');
        
        // Register hote hi 2 seconds baad Bonus Modal dikhao
        setTimeout(() => setShowBonus(true), 2000);
    };

    // Bonus claim karne ka logic
    const claimReward = (amount) => {
        setBalance(prev => prev + amount);
    };

    // --- NAVIGATION ROUTER ---
    const renderScreen = () => {
        switch (currentScreen) {
            case 'REGISTER':
                return <RegisterScreen onRegisterSuccess={handleAuth} />;
            case 'DASHBOARD':
                return (
                    <>
                        <CentralDashboard 
                            user={user} 
                            balance={balance} 
                            onNavigate={(sc) => setCurrentScreen(sc)} 
                        />
                        <FairPlayShield />
                    </>
                );
            case 'CASHIER':
                return <CashierScreen balance={balance} onBack={() => setCurrentScreen('DASHBOARD')} />;
            case 'LIVE':
                return <LiveCasinoScreen onBack={() => setCurrentScreen('DASHBOARD')} />;
            default:
                return <RegisterScreen onRegisterSuccess={handleAuth} />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            
            {/* Displaying Current Screen */}
            {renderScreen()}

            {/* Global Components */}
            <DailyBonusModal 
                visible={showBonus} 
                onClose={() => setShowBonus(false)} 
                onClaim={claimReward} 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' }
});

export default App;
