import React from "react";
import Modal from "react-modal";

import classes from "./ErrorModalWindow.module.css";

import Button from "../Button/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: "rgba(255, 255, 255)",
    borderColor: "rgba(255, 50, 50)",
    border: "2px solid #dbdbe7",
  },
};

const ErrorModalWindow = ({
  isOpen,
  onRequestClose,
  errorMessage,
  isError,
}) => {
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div>
        <div className={classes["error-modal-text"]}>
          <h1>Error!</h1>
          <h3>{errorMessage}</h3>
        </div>
        <button onClick={onRequestClose} className={classes["accept-button"]}>
          Accept
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModalWindow;
