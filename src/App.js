
import './App.css';

// import the components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from './components/Accordion/Accordion';
import Team from './components/Team/Team';
import Section1 from './components/section1/Section1';
import Section2 from './components/Section2/Section2';
import SectionBtn from './components/Button/SectionBtn';
import Step from './components/Step/Step';

import { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import MinterCanvas from './components/Minter';
import StepSec from "./components/StepSection/StepSec";
import TutSec from "./components/TutSec/TutSec"

// //////
import { useAccount, useWalletClient, useDisconnect } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import ModalContainer from "./components/Modal/Modal";
import Utils from "../src/actions/utils";
import { useWallet } from "../src/actions/cosmwasm";
import { config } from './actions/config';

import jwt_decode from "jwt-decode";
import axios from 'axios';
import md5 from 'md5';
import { getCollectionList } from './api/collections';

function App() {

  const { open } = useWeb3Modal();
  const [walletName, setWalletName] = useState("Connect Wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [signer, setSigner] = useState(null);
  const [currentUsr, setCurrentUsr] = useState(null);
  const [collectionList, setCollectionList] = useState([]);

  const { connectToCoreum, disconnectFromCoreum, isEmpty, loadClient, client } = useWallet();
  const [currentNetworkSymbol, setCurrentNetworkSymbol] = useState(1);

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
    setSigner(signer)

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
    (async () => {
      try {
        if (!client) {
          await loadClient();
        }
      } catch (err) {
        setTimeout(() => loadClient(), 1000);
      }
    })();
  }, [client, loadClient]);



  const Login = async (params) => {

    await axios({
      method: "post",
      url: `${config.baseUrl}users/login`,
      data: params,
    })
      .then(function (response) {
        if (response.data.code === 0) {
          //set the token to sessionStroage
          const token = response.data.token;
          localStorage.setItem("jwtToken", response.data.token);
          const decoded = jwt_decode(token);
          setCurrentUsr((decoded)._doc);
        } else {
          setWalletName("Connect Wallet")
        }
      })
      .catch(function (error) {
        console.log(error);
        setWalletName("Connect Wallet")
      });
  };

  useEffect(() => {
    if (!isEmpty(walletName)) {
      const params = { address: "", password: "" };
      params.address = walletName;
      params.password = md5(walletName);
      Login(params);
    } else {
    }
  }, [walletName]);

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
      setCurrentNetworkSymbol(1)
    } else if (wallet === "leap") {
      authenticate("leap");
      setCurrentNetworkSymbol(1)
    } else if (wallet === "ethereum") {
      await open();
      setCurrentNetworkSymbol(2)
    }
    utils.saveChain(wallet);
    setIsModalOpen(false);
  };

  const authenticate = async (wallet_type) => {

    const result = await connectToCoreum(wallet_type);

    const { tempClient: signingClient, address: walletAddress } = result;


    if (signingClient) {
      setWalletName(walletAddress);
      setSigner(signingClient)
      // toast.success(`Connected to ${wallet_type} wallet`);
    }
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

  const scrollToMint = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  const initConnect = async (wallet) => {
    if (wallet !== "ethereum") {
      await disconnect();
      utils.clearChain();
    }

    if (wallet === "keplr") {
      authenticate("keplr");
      setCurrentNetworkSymbol(1)
    } else if (wallet === "leap") {
      authenticate("leap");
      setCurrentNetworkSymbol(1)
    } else if (wallet === "ethereum") {
      if (!isConnected) await open();
      setCurrentNetworkSymbol(2)
    }
  }
  const [windowAvailable, setWindowAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowAvailable(true);
    }
  }, []);

  useEffect(() => {
    if (windowAvailable) {
      const wallet = localStorage.getItem("wallet_type");
      initConnect(wallet);
    }
  }, [windowAvailable]);



  const fetchCollections = async (limit, currentUserId) => {
    // console.log(
    //   ".... currentUserId", currentUserId
    // )
    try {
      const response = await getCollectionList(
        limit,
        currentUserId,
        currentNetworkSymbol
      );
      const colData = response.data || [];
      console.log(":::: colData", colData)
      setCollectionList(colData);
    } catch (err) {
      console.log(err);
      setCollectionList([]);
    } finally {
      // setWorking(false);

    }
  };

  useEffect(() => {
    if (currentUsr) fetchCollections(10, currentUsr._id);
  }, [currentUsr]);

  return (
    <>
      <Header
        walletName={walletName}
        isModalOpen={isModalOpen}
        isAnimating={isAnimating}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleWalletClick={handleWalletClick}
        renderHTML={renderHTML}
        shortenAddress={shortenAddress}
        signer={signer}
      />

      {currentUsr &&
        <MinterCanvas
          walletName={walletName}
          signer={signer}
          // 
          currentUsr={currentUsr}
          collectionList={collectionList}
          currentNetworkSymbol={currentNetworkSymbol}
        />
      }
      <StepSec />
      <TutSec onClick={scrollToMint} />
      <Section2 />
      <SectionBtn title="Mint Now" onClick={scrollToMint} />
      <Team />
      <Accordion />
      <Footer />
    </>
  );
}
// 
export default App;