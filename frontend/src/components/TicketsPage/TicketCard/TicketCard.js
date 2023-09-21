import React, { useState, useEffect } from "react";

import classes from "./TicketCard.module.css";

import { useEventImagesContext } from "../../../hooks/EventImagesContext";
import { formatTime, formatDate } from "../../../lib/Utils";

import ImageIcon from "../../../assets/svg/ImageIcon";

const TicketCard = ({ ticket }) => {
  const { eventImages, fetchEventImage } = useEventImagesContext();

  const { title, startDate, location, image } = ticket.event;
  const formattedDate = formatDate(startDate);
  const formattedTime = formatTime(startDate);

  // load image
  useEffect(() => {
    if (image) {
      fetchEventImage(image);
    }
  }, [image, fetchEventImage]);

  return (
    <>
      <div className={classes["ticket-card"]}>
        {eventImages[image] ? (
          <img src={eventImages[image]} alt="" />
        ) : (
          <ImageIcon height={"30vh"} width={"100%"} />
        )}

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
