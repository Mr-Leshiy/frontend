import React, { useState } from "react";

import classes from "./WalletElement.module.css";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";
import WalletErrorModal from "./WalletErrorModal";

const WalletElement = (props) => {
  const { connect, accountBalance, usedAddresses } = useCardano();
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
        {props.wallet.name}
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
