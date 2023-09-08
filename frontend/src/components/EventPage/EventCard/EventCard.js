import React from "react";

import classes from "./EventCard.module.css";
import ClockLogo from "../../../assets/clock.svg";
import CalendarLogo from "../../../assets/calendar.svg";
import LocationPinLogo from "../../../assets/location-pin.svg";
import UrlLogo from "../../../assets/url.svg";
import EditLogo from "../../../assets/edit.svg";
import { formatDate, formatTime } from "../../../lib/Utils";

const EventCard = (props) => {
  return (
    <div className={classes["event-card"]}>
      <div className={classes["edit-button"]}>
        <img src={EditLogo} alt="" />
      </div>

      <div className={classes["event-card-info"]}>
        <h4>Start time</h4>
        <div className={classes["event-card-info-element"]}>
          <img src={CalendarLogo} alt="" />
          <h3>{formatDate(new Date(props.event.startDate))}</h3>
        </div>

        <div className={classes["event-card-info-element"]}>
          <img src={ClockLogo} alt="" />
          <h3>{formatTime(new Date(props.event.startDate))}</h3>
        </div>
      </div>

      <div className={classes["event-card-info"]}>
        <h4>End time</h4>
        <div className={classes["event-card-info-element"]}>
          <img src={CalendarLogo} alt="" />
          <h3>{formatDate(new Date(props.event.endDate))}</h3>
        </div>

        <div className={classes["event-card-info-element"]}>
          <img src={ClockLogo} alt="" />
          <h3>{formatTime(new Date(props.event.endDate))}</h3>
        </div>
      </div>

      <div className={classes["event-card-info"]}>
        <h4>Location</h4>
        <div className={classes["event-card-info-element"]}>
          <img src={LocationPinLogo} alt="" />
          <h3>{props.event.location}</h3>
        </div>
      </div>

      <div className={classes["event-card-info"]}>
        <h4>Website</h4>
        <div className={classes["event-card-info-element"]}>
          <img src={UrlLogo} alt="" />
          <h3>{props.event.website}</h3>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
