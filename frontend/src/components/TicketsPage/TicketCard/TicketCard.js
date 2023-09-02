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

  const date = props.ticket.date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
  const time =
    props.ticket.date.getHours() + ":" + props.ticket.date.getMinutes();
  const location = props.ticket.location;

  return (
    <>
      <TicketCardModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        ticket={props.ticket}
      />
      <div className={classes["ticket-card"]} onClick={openModal}>
        <img src={CrossImage} alt="" />

        <div className={classes["ticket-card-info"]}>
          <h3>{props.ticket.title} </h3>

          <div className={classes["ticket-card-info-date"]}>
            <div className={classes["ticket-card-info-date-data"]}>
              <h4>Date</h4>
              <h3>{date}</h3>
            </div>

            <div className={classes["ticket-card-info-date-data"]}>
              <h4>Time</h4>
              <h3>{time}</h3>
            </div>
          </div>

          <div className={classes["ticket-card-info-location"]}>
            <h4>Location</h4>
            <h3>{location}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
