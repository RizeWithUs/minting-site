class Utils {
    async saveChain(chain) {
        if (chain !== "coreum" && chain !== "ethereum") return;
        localStorage.setItem("wallet", chain);
    }
}

export default Utils;