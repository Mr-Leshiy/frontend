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
  const venue = props.ticket.venue;

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
          <div className={classes["ticket-card-info-title"]}>
            {props.ticket.title}
          </div>

          <div className={classes["ticket-card-info-date"]}>
            <div className={classes["ticket-card-info-date-data"]}>
              <div className={classes["ticket-card-info-date-data-title"]}>
                Date
              </div>
              <div className={classes["ticket-card-info-date-data-content"]}>
                {date}
              </div>
            </div>

            <div className={classes["ticket-card-info-date-data"]}>
              <div className={classes["ticket-card-info-date-data-title"]}>
                Time
              </div>
              <div className={classes["ticket-card-info-date-data-content"]}>
                {time}
              </div>
            </div>
          </div>

          <div className={classes["ticket-card-info-venue"]}>
            <div className={classes["ticket-card-info-venue-title"]}>
              Venue
            </div>
            <div className={classes["ticket-card-info-venue-content"]}>
              {venue}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
