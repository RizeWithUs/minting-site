import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useWalletClient } from "wagmi";
import { ethers } from "ethers";

const Header = () => {
  const { open } = useWeb3Modal();

  const [walletName, setWalletName] = useState("Connect Wallet");

  function shortenAddress(address) {
    if (address === "Connect Wallet") return "Connect Wallet";

    if (typeof address !== "string" || address.length < 10) {
      return address;
    }
    const firstFiveDigits = address.slice(0, 5);
    const lastFourDigits = address.slice(-4);

    return `${firstFiveDigits}...${lastFourDigits}`;
  }

  // /==========
  const clientToProviderSigner = async (client) => {
    const { account, chain, transport } = client;
    const network = {
      chainId: chain?.id,
      name: chain?.name,
      ensAddress: chain?.contracts?.ensRegistry?.address,
    };
    // You can use whatever provider that fits your need here.
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

  // ////==========

  useEffect(() => {
    setWalletName(
      address
        ? address
        : // : userData.walletAddr
          // ? shortenAddress(userData.walletAddr)
          // : name
          "Connect Wallet"
    );
  }, [address]);

  const { data: walletClient } = useWalletClient();

  const connectWallet = async () => {
    if (!walletClient) return;
    const { signer, provider } = await clientToProviderSigner(walletClient);
  };

  useEffect(() => {
    isConnected && walletClient && connectWallet();
  }, [isConnected, walletClient]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 999 }}>
      <nav
        class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://rizenft.com" class="flex items-center">
            <img
              src="https://res.cloudinary.com/staunchngdev/image/upload/v1703320649/rizenft/e5zcyvgprscppf1rmm6d.png"
              class="mr-3 h-6 sm:h-9"
              alt="Rizenfts Logo"
            />
          </a>
          <div class="flex items-center lg:order-2">
            <button
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              style={{ backgroundColor: "green" }}
              onClick={async () => await open()}
            >
              {shortenAddress(walletName)}
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
