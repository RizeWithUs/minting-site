class Utils {
    async saveWallet(wallet) {
        localStorage.setItem("wallet", wallet);
    }
}

export default Utils;