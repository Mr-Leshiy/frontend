import React, { useState } from "react";

import classes from "./ConnectWallet.module.css";

import { walletsInfo } from "../../../hooks/WalletContext";

import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import WalletElement from "./WalletElement/WalletElement.js";

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
    <ModalWindow isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
      <div className={classes["connect-wallet"]}>
        <div className={classes["connect-wallet-title"]}>Connect a wallet</div>
        <div className={classes["connect-wallet-description"]}>
          Select the wallet you want to connect below.
        </div>
        <div className={classes["wallets-list"]}>{wallets_view}</div>
      </div>
    </ModalWindow>
  );
};

export default ConnectWallet;
