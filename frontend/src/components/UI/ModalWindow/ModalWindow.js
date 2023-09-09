import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(135deg, #ffd8e6, #ffffff 35% 65%, #8ed0ff)",
    "box-shadow": "0px 14px 34px rgba(124, 137, 247, 0.4)",
    "border-radius": "10px",
    "border": "2px solid #dbdbe7",
  },
};

const ModalWindow = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={customStyles}
    >
      {props.children}
    </Modal>
  );
};

export default ModalWindow;
