import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./Header.module.css";
import ConnectWallet from "./ConnectWallet/ConnectWallet.js";
import Button from "../UI/Button/Button.js";

const Header = (props) => {
  const { isConnected, disconnect } = useCardano();
  const [modalIsOpen, setIsOpen] = useState(false);

  function disconnectWallet() {
    disconnect();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className={classes["header"]}>
        {isConnected ? (
          <>
            <Button
              className={classes["connect-wallet-button"]}
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </Button>
          </>
        ) : (
          <Button
            className={classes["connect-wallet-button"]}
            onClick={openModal}
          >
            Connect Wallet
          </Button>
        )}
      </header>
      <ConnectWallet modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
