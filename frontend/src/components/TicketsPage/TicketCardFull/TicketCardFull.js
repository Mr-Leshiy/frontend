import React from "react";
import Modal from "react-modal";

import classes from "./TicketCardFull.module.css";

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

const TicketCardModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["ticket-card"]}>
        <h5>{props.ticket.title}</h5>
        <h5>
          {props.ticket.date.toLocaleDateString("en-us", {
            day: "numeric",
            year: "numeric",
            month: "short",
          })}
        </h5>
      </div>
    </Modal>
  );
};

export default TicketCardModal;
