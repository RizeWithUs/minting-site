import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Web3ModalProvider } from "../src/Provider/WagmiProvider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { WalletProvider } from './actions/cosmwasm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WalletProvider>
    <Web3ModalProvider>
      <App />
      <ToastContainer />
    </Web3ModalProvider>
  </WalletProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
