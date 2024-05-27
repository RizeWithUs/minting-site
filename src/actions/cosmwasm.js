import React, { createContext, useContext, useState } from 'react';
import { toast } from "react-toastify";
import { chainConfig, config, PLATFORM_NETWORKS } from "./config.js";
import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

// Create the context
const WalletContext = createContext();

// Custom hook to use the WalletContext
export const useWallet = () => {
    return useContext(WalletContext);
};

// Provider component
export const WalletProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [signingClient, setSigningClient] = useState(null);

    const isEmpty = (value) => {
        return (
            value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
        );
    };

    const getWalletProvider = (wallet_type) => {
        let provider = null;
        switch (wallet_type) {
            case "keplr":
                if (window.keplr) provider = window.keplr;
                break;
            case "leap":
                if (window.leap) provider = window.leap;
                break;
            case "cosmostation":
                if (window.cosmostation) provider = window.cosmostation.providers.keplr;
                break;
            default:
                break;
        }
        return provider;
    };

    const connectToCoreum = async (wallet_type, new_config = null) => {
        const provider = await getWalletProvider(wallet_type);
        let walletConfig = chainConfig;
        if (!isEmpty(new_config)) {
            walletConfig = new_config;
        }

        if (provider === null) {
            alert(`Please ${wallet_type} wallet to continue.`);
            switch (wallet_type) {
                case "keplr":
                    window.open("https://www.keplr.app/", "_blank");
                    break;
                case "leap":
                    window.open("https://leapwallet.io/", "_blank");
                    break;
                case "cosmostation":
                    window.open("https://cosmostation.io/", "_blank");
                    break;
                default:
                    break;
            }
            return;
        } else {
            if (provider.experimentalSuggestChain) {
                try {
                    await provider.experimentalSuggestChain(walletConfig);
                } catch (error) {
                    console.log(error);
                    toast.error("Please select a chain");
                    return;
                }
            } else {
                toast.warn("Please use the recent version of wallet extension");
                return;
            }
        }

        try {
            await provider.enable(walletConfig.chainId);
        } catch (err) {
            console.log(err);
            return;
        }

        try {
            const offlineSigner = await provider.getOfflineSigner(walletConfig.chainId);
            const tempClient = await SigningCosmWasmClient.connectWithSigner(walletConfig.rpc, offlineSigner);
            setSigningClient(tempClient);

            const accounts = await offlineSigner.getAccounts();
            const address = accounts[0].address;
            setWalletAddress(address);
            localStorage.setItem("address", address);
            localStorage.setItem("wallet_type", wallet_type);
            return { signingClient, walletAddress }
        } catch (err) {
            console.log("Connect Wallet: ", err);
        }
    };

    return (
        <WalletContext.Provider value={{
            walletAddress,
            signingClient,
            connectToCoreum
        }}>
            {children}
        </WalletContext.Provider>
    );
};
