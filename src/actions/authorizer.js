
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Web3 from 'web3';
import axios from "axios";


// import { useWriteContract } from 'wagmi'
import { useWeb3Modal } from "@web3modal/wagmi/react";

const userAuthSign = createContext({});

export const API_URL = 'BACKEND_URL' + "/api/v1";
export const useSigningClient = () => useContext(userAuthSign);

export const SigningProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { open } = useWeb3Modal()


    const connectW = async (walletAddr, token) => {
        let currentAccount = "";
        try {
            await open()
            return "Connect Wallet";
        } catch (error) {
            console.log(":::;connectW error", error)
            return "Connect Wallet";
        }
    };


    return (
        <userAuthSign.Provider
            value={{
                connectW,
            }}
        >
            {children}
        </userAuthSign.Provider>
    );
};
export default userAuthSign;