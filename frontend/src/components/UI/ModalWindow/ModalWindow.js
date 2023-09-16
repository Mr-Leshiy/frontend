import React from "react";
import Modal from "react-modal";

import classes from "./ModalWindow.module.css";

import CloseIcon from "../../../assets/svg/CloseIcon/CloseIcon";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(135deg, #ffd8e6, #ffffff 35% 65%, #8ed0ff)",
    boxShadow: "0px 14px 34px rgba(124, 137, 247, 0.4)",
    borderRadius: "10px",
    border: "2px solid #dbdbe7",
  },
};

const ModalWindow = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className={classes["close-button"]}>
        <CloseIcon onClick={onRequestClose} />
      </div>

      {children}
    </Modal>
  );
};

export default ModalWindow;
