import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./Header.module.css";
import ConnectWallet from "./ConnectWallet/ConnectWallet.js";
import Button from "../UI/Button/Button.js";
import Logo from "../../assets/logo.svg";

const Header = (props) => {
  const { isConnected, disconnect } = useCardano();
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(window.screen.width);
  console.log(window.screen.height);

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
      <ConnectWallet modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <header ref={props.header_ref} className={classes["header"]}>
        <img src={Logo} alt="" />

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
    </>
  );
};

export default Header;
