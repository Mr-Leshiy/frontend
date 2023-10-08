import React, { useState, useContext, createContext } from "react";

import CardanoWallet, { availableCardanoWallets } from "../lib/CardanoWallet";

export const walletsInfo = () => {
  let cardanoWallets = availableCardanoWallets();
  return cardanoWallets;
};

const WalletContext = createContext(null);

const WalletContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  const isConnected = () => {
    return wallet != null;
  };

  const disconnect = () => {
    setWallet(null);
  };

  const connect = async (walletName, onConnect, onError) => {
    try {
      let wallet = await CardanoWallet.create(walletName);
      if (wallet != null) {
        setWallet(wallet);
        onConnect();
      } else {
        onError("Cannot find wallet");
      }
    } catch (e) {
      onError(e);
    }
  };

  return (
    <WalletContext.Provider
      value={{ wallet, isConnected, disconnect, connect }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error(
      "useWalletContexxt must be used within a WalletContextProvider",
    );
  }
  return context;
};

export default WalletContextProvider;
