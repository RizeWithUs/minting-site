import React, { useState, useEffect } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useWalletClient } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const Header = () => {
  const { open } = useWeb3Modal();
  const [walletName, setWalletName] = useState("Connect Wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    setWalletName(address ? address : "Connect Wallet");
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
                // onClick={async () => await open()}
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            className={`bg-white w-1/3 p-8 z-10 rounded-lg shadow-lg relative transform transition-all duration-300 ease-in-out ${
              isAnimating
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-full opacity-0 scale-75"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={handleCloseModal}
            >
              &#10006;
            </button>
            <div>
              <li>first</li>
              <li>second</li>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
