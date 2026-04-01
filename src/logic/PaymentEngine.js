// FaziCasino 2026 - Payment & Withdrawal Engine
const PaymentEngine = {
    // 1. Official Admin Number for Deposits
    adminNumber: "03273760674",
    
    // 2. Withdrawal Configuration (Royal X Style)
    withdrawalFeePercent: 0.02, // 2% Fee
    minWithdrawal: 500,        // Kam az kam nikalwayein
    maxWithdrawal: 150000,      // Rozana ki had

    // 3. Process Withdrawal (Calculating Fee)
    requestWithdrawal: (userBalance, requestedAmount, method) => {
        if (requestedAmount < PaymentEngine.minWithdrawal) {
            return { success: false, message: "Kam az kam 500 nikalwa saktay hain." };
        }

        const fee = requestedAmount * PaymentEngine.withdrawalFeePercent;
        const totalDeduction = requestedAmount + fee;

        if (totalDeduction > userBalance) {
            return { success: false, message: "Balance kam hai (2% fee shamil hai)!" };
        }

        return {
            success: true,
            amountSent: requestedAmount,
            feeCharged: fee,
            remainingBalance: userBalance - totalDeduction,
            message: `Apki ${method} request (Fee: ${fee}) bhej di gayi hai.`
        };
    }
};

export default PaymentEngine;
