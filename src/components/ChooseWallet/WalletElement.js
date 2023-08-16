import React from "react";

import classes from "./WalletElement.module.css";

const WalletElement = (props) => {
  return <div className={classes["wallet-element"]}>{props.name}</div>;
};

export default WalletElement;
