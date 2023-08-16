import React, { useState, useEffect } from "react";

import classes from "./TicketCard.module.css";
import TicketCardModal from "./TicketCardModal";

const TicketCard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <TicketCardModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        title={props.title}
        date={props.date}
      />
      <div className={classes["ticket-card"]} onClick={openModal}>
        <h5>{props.title}</h5>
        <h5>
          {props.date.toLocaleDateString("en-us", {
            day: "numeric",
            year: "numeric",
            month: "short",
          })}
        </h5>
      </div>
    </>
  );
};

export default TicketCard;
