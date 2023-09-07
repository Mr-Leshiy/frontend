import React, { useState } from "react";

import classes from "./TicketCard.module.css";
import TicketCardModal from "../TicketCardFull/TicketCardFull.js";
import CrossImage from "../../../assets/cross.png";
import { formatTime, formatDate } from "../../../lib/Utils";

const TicketCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const { event } = props.ticket;
  const { title, date, location } = event;
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

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
          <h3>{title}</h3>

          <div className={classes["ticket-card-info-date"]}>
            <div className={classes["ticket-card-info-date-data"]}>
              <h4>Date</h4>
              <h3>{formattedDate}</h3>
            </div>

            <div className={classes["ticket-card-info-date-data"]}>
              <h4>Time</h4>
              <h3>{formattedTime}</h3>
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
