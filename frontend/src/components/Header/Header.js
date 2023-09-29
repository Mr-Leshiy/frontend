import React from "react";

import classes from "./Header.module.css";

import { useCardanoWalletContext } from "../../hooks/CardanoWallet";
import { useModalHandler } from "../../hooks/ModalHandler";

import Logo from "../../assets/svg/logo.svg";

import ConnectWallet from "./ConnectWallet/ConnectWallet.js";
import Button from "../UI/Button/Button.js";

const MODALS = {
  connectWallet: "connectWallet",
};

const Header = () => {
  const { isConnected, disconnect } = useCardanoWalletContext();
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  function disconnectWallet() {
    disconnect();
  }

  return (
    <>
      <ConnectWallet
        modalIsOpen={modalsIsOpen[MODALS.connectWallet]}
        closeModal={closeModal(MODALS.connectWallet)}
      />
      <header className={classes["header"]}>
        <img src={Logo} alt="" />

        <div className={classes["left-tab"]}>
          {isConnected ? (
            <Button
              className={classes["connect-wallet-button"]}
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </Button>
          ) : (
            <Button
              className={classes["connect-wallet-button"]}
              onClick={openModal(MODALS.connectWallet)}
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
