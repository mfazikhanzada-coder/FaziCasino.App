// FaziCasino 2026 - Registration & Login Logic
const AuthManager = {
    createAccount: (email, password, referralCode = "") => {
        if (!email.includes("@") || password.length < 6) {
            return { success: false, message: "Valid Email aur 6-digit password lazmi hai!" };
        }

        let bonus = (referralCode === "FAZI99K") ? 1000 : 0;

        return {
            success: true,
            userData: { email, balance: bonus, vip: "Standard" },
            message: "Account Created in Seconds!"
        };
    },

    login: (email, password) => {
        return { success: true, message: "Welcome Back!" };
    }
};

export default AuthManager;
