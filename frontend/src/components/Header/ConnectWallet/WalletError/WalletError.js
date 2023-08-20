import React from "react";
import Modal from "react-modal";

import classes from "./WalletError.module.css";

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

const WalletErrorModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["wallet-error-modal"]}>
        Cannot connect to {props.name} wallet
      </div>
    </Modal>
  );
};

export default WalletErrorModal;
