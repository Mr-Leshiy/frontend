import React from "react";
import Modal from "react-modal";

import classes from "./TicketCardFull.module.css";
import CrossImage from "../../../assets/cross.png";
import Button from "../../UI/Button/Button.js";

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
  const title = props.ticket.title;
  const date = props.ticket.date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
  const time =
    props.ticket.date.getHours() + ":" + props.ticket.date.getMinutes();
  const location = props.ticket.location;
  const description = props.ticket.description;
  const url = props.ticket.url;

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["ticket-card"]}>
        <img src={CrossImage} alt="" />

        <div className={classes["ticket-card-info"]}>
          <div className={classes["ticket-card-info-title"]}>
            <h2>{title}</h2>
          </div>

          <div className={classes["ticket-card-info-date-location"]}>
            <div className={classes["ticket-card-info-date-location-data"]}>
              <h4>Date</h4>
              <h3>{date}</h3>
            </div>

            <div className={classes["ticket-card-info-date-location-data"]}>
              <h4>Time</h4>
              <h3>{time}</h3>
            </div>

            <div className={classes["ticket-card-info-date-location-data"]}>
              <h4>Location</h4>
              <h3>{location}</h3>
            </div>
          </div>

          <div className={classes["ticket-card-info-url"]}>
            <h4>Url</h4>
            <a href={url}>
              <h3>{url}</h3>
            </a>
          </div>

          <div className={classes["ticket-card-info-description"]}>
            <p>{description}</p>
          </div>

          <Button
            className={classes["ticket-card-close-button"]}
            onClick={props.closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TicketCardModal;
