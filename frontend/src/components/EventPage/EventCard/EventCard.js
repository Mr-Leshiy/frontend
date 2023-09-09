import React, { useState } from "react";

import classes from "./EventCard.module.css";

import { formatDate, formatTime } from "../../../lib/Utils";

import ClockLogo from "../../../assets/svg/clock.svg";
import CalendarLogo from "../../../assets/svg/calendar.svg";
import LocationPinLogo from "../../../assets/svg/location-pin.svg";
import UrlLogo from "../../../assets/svg/url.svg";
import EditLogo from "../../../assets/svg/edit.svg";

import InputFormModal, {
  InpputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const EventCard = ({ event }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const openEditModal = () => setEditModalIsOpen(true);
  const closeEditModal = () => setEditModalIsOpen(false);

  const editInputs = [
    new Input("Event title", "title", InpputTypes.TEXT, "Title", 50, true),
    new Input("Event start", "start", InpputTypes.DATE, "", "", true),
    new Input("Event end", "end", InpputTypes.DATE, "", "", true),
    new Input(
      "Event location",
      "location",
      InpputTypes.TEXT,
      "Location",
      50,
      true,
    ),
    new Input(
      "Event website",
      "website",
      InpputTypes.TEXT,
      "Website link",
      50,
      false,
    ),
  ];

  return (
    <>
      <InputFormModal
        modalIsOpen={editModalIsOpen}
        closeModal={closeEditModal}
        inputs={editInputs}
        submitButtonText="Edit"
      />

      <div className={classes["event-card"]}>
        <div className={classes["edit-button"]} onClick={openEditModal}>
          <img src={EditLogo} alt="" />
        </div>

        <div className={classes["event-card-info"]}>
          <h4>Start time</h4>
          <div className={classes["event-card-info-element"]}>
            <img src={CalendarLogo} alt="" />
            <h3>{formatDate(event.startDate)}</h3>
          </div>

          <div className={classes["event-card-info-element"]}>
            <img src={ClockLogo} alt="" />
            <h3>{formatTime(event.startDate)}</h3>
          </div>
        </div>

        <div className={classes["event-card-info"]}>
          <h4>End time</h4>
          <div className={classes["event-card-info-element"]}>
            <img src={CalendarLogo} alt="" />
            <h3>{formatDate(event.endDate)}</h3>
          </div>

          <div className={classes["event-card-info-element"]}>
            <img src={ClockLogo} alt="" />
            <h3>{formatTime(event.endDate)}</h3>
          </div>
        </div>

        <div className={classes["event-card-info"]}>
          <h4>Location</h4>
          <div className={classes["event-card-info-element"]}>
            <img src={LocationPinLogo} alt="" />
            <h3>{event.location}</h3>
          </div>
        </div>

        <div className={classes["event-card-info"]}>
          <h4>Website</h4>
          <div className={classes["event-card-info-element"]}>
            <img src={UrlLogo} alt="" />
            <a href={event.website}>
              <h3>{event.website}</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
