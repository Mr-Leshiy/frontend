import React, { useState } from "react";
import Modal from "react-modal";

import classes from "./ConnectWallet.module.css";
import Button from "../../UI/Button/Button.js";
import WalletElement from "./WalletElement/WalletElement.js";
import { walletsInfo } from "../../../lib/Wallets.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
};

const ConnectWallet = (props) => {
  const [wallets] = useState(walletsInfo());

  const wallets_view = wallets.map((wallet) => {
    return (
      <WalletElement
        wallet={wallet}
        closeChooseWallet={props.closeModal}
        key={wallet.name}
      />
    );
  });

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["connect-wallet"]}>
        <div className={classes["connect-wallet-title"]}>Connect a wallet</div>
        <div className={classes["connect-wallet-description"]}>
          Select the wallet you want to connect below.
        </div>
        <div className={classes["wallets-list"]}>{wallets_view}</div>
        <Button onClick={props.closeModal} className={classes["close-button"]}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ConnectWallet;
