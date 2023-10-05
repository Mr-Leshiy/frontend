import React, { useState, useContext, createContext } from "react";

export const walletsInfo = () => {
  if (window.cardano) {
    const { nami, typhon, eternl } = window.cardano;

    const wallets = [];
    if (nami) {
      wallets.push({
        name: "Nami",
        version: nami.apiVersion,
        icon: nami.icon,
      });
    }
    // Bugs appeared with the usage of yoroi wallet https://github.com/cardano-foundation/cardano-connect-with-wallet/issues/87
    // if (yoroi) {
    //   wallets.push({
    //     name: "Yoroi",
    //     version: yoroi.apiVersion,
    //     icon: yoroi.icon,
    //   });
    // }
    if (typhon) {
      wallets.push({
        name: "Typhon",
        version: typhon.apiVersion,
        icon: typhon.icon,
      });
    }
    if (eternl) {
      wallets.push({
        name: "Eternl",
        version: eternl.apiVersion,
        icon: eternl.icon,
      });
    }
    return wallets;
  } else {
    return [];
  }
};

const WalletContext = createContext(null);

const WalletContextProvider = ({ children }) => {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [stakeAddress, setStakeAddress] = useState(null);

  const isConnected = () => {
    return connectedWallet != null;
  }

  const disconnect = () => {
    setStakeAddress(null);
  };

  const connect = async (walletName, onConnect, onError) => {
    walletName = walletName.toLowerCase();
    const cardano = window.cardano;
    if (cardano && cardano[walletName]) {
      try {
        let api = await cardano[walletName].enable();
        const hexAddresses = await api.getRewardAddresses();
        if (hexAddresses && hexAddresses.length > 0) {
          setStakeAddress(hexAddresses[0]);
        }

        setConnectedWallet(api);
        onConnect();
      } catch (e) {
        console.log(e);
        onError(e);
      }
    } else {
      onError("Cannot find wallet");
    }
  };

  return (
    <WalletContext.Provider
      value={{ isConnected, stakeAddress, disconnect, connect }}
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
