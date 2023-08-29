import React, { useState } from "react";

import classes from "./TicketCard.module.css";
import TicketCardModal from "../TicketCardFull/TicketCardFull.js";
import CrossImage from "../../../assets/cross.png";

const TicketCard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const id = props.ticket.id.slice(0, 8) + "...";

  return (
    <>
      <TicketCardModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        ticket={props.ticket}
      />
      <div className={classes["ticket-card"]} onClick={openModal}>
        <img src={CrossImage} alt="" width={150} height={200} />
        <div className={classes["ticket-card-info"]}>
          <div>{id}</div>
          <h5>{props.ticket.title}</h5>
          <h5>
            {props.ticket.date.toLocaleDateString("en-us", {
              day: "numeric",
              year: "numeric",
              month: "short",
            })}
          </h5>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
