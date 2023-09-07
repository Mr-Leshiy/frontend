import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./WalletElement.module.css";
import WalletErrorModal from "../WalletError/WalletError.js";

const WalletElement = (props) => {
  const { connect } = useCardano();
  const [errorIsOpen, setErrorIsOpen] = useState(false);

  function closeError() {
    setErrorIsOpen(false);
  }

  function connectWallet() {
    connect(
      props.wallet.name,
      () => props.closeChooseWallet(),
      () => setErrorIsOpen(true),
    );
  }

  return (
    <>
      <div className={classes["wallet-element"]} onClick={connectWallet}>
        <img src={props.wallet.icon} alt="" />
        <div className={classes["wallet-element-name"]}>
          {props.wallet.name}
        </div>
      </div>
      <WalletErrorModal
        modalIsOpen={errorIsOpen}
        closeModal={closeError}
        name={props.wallet.name}
      />
    </>
  );
};

export default WalletElement;
