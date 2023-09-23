import React, { useState, useContext, createContext } from "react";

const CardanoWalletContext = createContext(null);

const CardanoWalletContextProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [stakeAddress, setStakeAddress] = useState(null);

  const disconnect = () => {
    setIsConnected(false);
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

        setIsConnected(true);
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
    <CardanoWalletContext.Provider
      value={{ isConnected, stakeAddress, disconnect, connect }}
    >
      {children}
    </CardanoWalletContext.Provider>
  );
};

export const useCardanoWalletContext = () => {
  const context = useContext(CardanoWalletContext);
  if (!context) {
    throw new Error(
      "useCardanoWalletContexxt must be used within a CardanoWalletContextProvider",
    );
  }
  return context;
};

export default CardanoWalletContextProvider;
