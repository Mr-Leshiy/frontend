import React, { useState } from "react";
import Button from "../UI/Button/Button.js";

import classes from "./Header.module.css";
import ConnectWallet from "../ConnectWallet/ConnectWallet.js";

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className={classes["header"]}>
        <Button
          className={classes["connect-wallet-button"]}
          onClick={openModal}
        >
          Connect Wallet
        </Button>
      </header>
      <ConnectWallet modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
