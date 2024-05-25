class Utils {
    async saveChain(chain) {
        if (chain !== "coreum" && chain !== "ethereum") return;
        localStorage.setItem("chain", chain);
    }

    async getChain() {
        return localStorage.getItem("chain");
    }

    async clearChain() {
        localStorage.removeItem("chain");
    }

}

export default Utils;