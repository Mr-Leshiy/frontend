import React, { useState } from "react";
import Modal from "react-modal";

import classes from "./ChooseWallet.module.css";
import Button from "../UI/Button/Button";
import WalletElement from "./WalletElement";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
};

const WALLETS = [
  {
    name: "Nami",
    url: "https://namiwallet.io/",
  },
  {
    name: "Eternl",
    url: "https://eternl.io/",
  },
];

const ConnectWallet = (props) => {
  const [wallets] = useState(WALLETS);

  const wallets_view = wallets.map((wallet) => {
    return (
      <WalletElement wallet={wallet} closeChooseWallet={props.closeModal} />
    );
  });

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["choose-wallet"]}>
        <h1>Choose the wallet</h1>
        {wallets_view}
        <Button onClick={props.closeModal} className={classes["close-button"]}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ConnectWallet;
