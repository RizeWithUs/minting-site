import React, { useState, useEffect } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useWalletClient, useDisconnect } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import ModalContainer from "../Modal/Modal";
import Utils from "../../actions/utils";
import { useWallet } from "../../actions/cosmwasm";

const Header = () => {
  const { open } = useWeb3Modal();
  const [walletName, setWalletName] = useState("Connect Wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { connectToCoreum } = useWallet();

  // const {connectToCoreum} =

  const utils = new Utils();

  const clientToProviderSigner = async (client) => {
    const { account, chain, transport } = client;
    const network = {
      chainId: chain?.id,
      name: chain?.name,
      ensAddress: chain?.contracts?.ensRegistry?.address,
    };
    const provider = new ethers.BrowserProvider(transport, network);
    const signer = await provider.getSigner(account?.address);

    return { provider, signer };
  };

  const {
    address,
    isConnected,
    connector,
    isConnecting,
    isDisconnected,
    isReconnecting,
    status,
  } = useAccount();

  const { disconnect } = useDisconnect();

  useEffect(() => {
    setWalletName(address ? address : "Connect Wallet");

    if (address) localStorage.setItem("address", address);
    if (isConnected) localStorage.setItem("wallet_type", "ethereum");
  }, [address]);

  const { data: walletClient } = useWalletClient();

  const connectWallet = async () => {
    if (!walletClient) return;
    const { signer, provider } = await clientToProviderSigner(walletClient);
  };

  useEffect(() => {
    isConnected && walletClient && connectWallet();
  }, [isConnected, walletClient]);

  const shortenAddress = (address) => {
    if (address === "Connect Wallet") return "Connect Wallet";
    if (typeof address !== "string" || address.length < 10) {
      return address;
    }
    const firstFiveDigits = address.slice(0, 5);
    const lastFourDigits = address.slice(-4);
    return `${firstFiveDigits}...${lastFourDigits}`;
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  const handleWalletClick = async (wallet) => {
    if (wallet !== "ethereum") {
      await disconnect();
      utils.clearChain();
    }

    if (wallet === "keplr") {
      authenticate("keplr");
    } else if (wallet === "leap") {
      authenticate("leap");
    } else if (wallet === "ethereum") {
      await open();
    }
    utils.saveChain(wallet);
    setIsModalOpen(false);
  };

  const authenticate = async (wallet_type) => {
    await connectToCoreum(wallet_type);
  };

  const renderHTML = () => {
    const wallets = [
      {
        name: "Ethereum",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvBB18px3CW4CHmO9jF9L_3zKm20A4D7biaXeziIaRA&s",
        id: "ethereum",
      },
      {
        name: "Keplr",
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5e/4f/57/5e4f5704-c8f3-83cb-884d-434037edbe3a/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/1200x600wa.png",
        id: "keplr",
      },
    ];

    return (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>
        <ul className="flex space-x-4">
          {wallets.map((wallet) => (
            <li
              key={wallet.name}
              className="flex items-center cursor-pointer"
              onClick={() => handleWalletClick(wallet.id)}
            >
              <img
                src={wallet.logo}
                alt={`${wallet.name} logo`}
                className="w-20 h-20 border-4 border-green-500 rounded"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <nav
          className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800"
          style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://rizenft.com" className="flex items-center">
              <img
                src="https://res.cloudinary.com/staunchngdev/image/upload/v1703320649/rizenft/e5zcyvgprscppf1rmm6d.png"
                className="mr-3 h-6 sm:h-9"
                alt="Rizenfts Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <button
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                style={{ backgroundColor: "green" }}
                onClick={handleOpenModal}
              >
                {shortenAddress(walletName)}
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            ></div>
          </div>
        </nav>
      </header>

      {isModalOpen && (
        <ModalContainer
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          render={renderHTML}
        />
      )}
    </>
  );
};

export default Header;
