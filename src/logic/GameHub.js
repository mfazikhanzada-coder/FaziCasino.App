// FaziCasino 2026 - Master Game Hub (Variety & Betting)
const GameHub = {
    // 1. All Game Titles (Royal X Variety)
    library: [
        { id: "crash_01", name: "Fazi Crash", category: "Mini", minBet: 10, isNew: true },
        { id: "mines_01", name: "Gold Mines", category: "Skill", minBet: 20, isNew: false },
        { id: "plinko_01", name: "Plinko Pro", category: "Luck", minBet: 5, isNew: true },
        { id: "gow_01", name: "God of Wealth", category: "Slots", minBet: 2, isNew: false },
        { id: "tp_01", name: "Teen Patti", category: "Cards", minBet: 50, isNew: false },
        { id: "rt_01", name: "Live Roulette", category: "Live", minBet: 100, isNew: true }
    ],

    // 2. Betting Logic (Real Money Connection)
    processBet: (userBalance, betAmount) => {
        if (betAmount > userBalance) {
            return { 
                allowed: false, 
                message: "Balance kam hai! Please 03273760674 par deposit karein." 
            };
        }
        
        const remainingBalance = userBalance - betAmount;
        return { 
            allowed: true, 
            newBalance: remainingBalance,
            sessionId: "FAZI_" + Math.random().toString(36).substr(2, 9)
        };
    },

    // 3. Category Filter (User-Friendly Navigation)
    getGamesByCategory: (catName) => {
        return GameHub.library.filter(game => game.category === catName);
    }
};

export default GameHub;
