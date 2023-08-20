import React from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./WalletInfo.module.css";

const WalletInfo = (props) => {
  const { stakeAddress } = useCardano();

  return (
    <div className={` ${classes["wallet-info"]} ${props.className}`}>
      {stakeAddress}
    </div>
  );
};

export default WalletInfo;
