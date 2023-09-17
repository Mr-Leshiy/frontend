import React, { useState } from "react";

import classes from "./EventCard.module.css";

import { useEventsContext } from "../../../hooks/EventsContext";
import { useModalHandler } from "../../../hooks/ModalHandler";
import { formatDate, formatTime } from "../../../lib/Utils";

import ClockLogo from "../../../assets/svg/clock.svg";
import CalendarLogo from "../../../assets/svg/calendar.svg";
import LocationPinLogo from "../../../assets/svg/location-pin.svg";
import UrlLogo from "../../../assets/svg/url.svg";
import EditIcon from "../../../assets/svg/EditIcon/EditIcon";

import InputFormModal, {
  InputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const MODALS = {
  edit: "edit",
};

const EventCard = ({ eventIndex }) => {
  const { events, setEvents } = useEventsContext();
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  const event = events[eventIndex];

  const onSubmitHandler = (eventValue) => {
    setEvents((events) => {
      events[eventIndex].startDate = eventValue.startDate;
      events[eventIndex].endDate = eventValue.endDate;
      events[eventIndex].location = eventValue.location;
      events[eventIndex].website = eventValue.website;
      return events;
    });
  };

  const editInputs = [
    new Input(
      "Event start date",
      "startDate",
      InputTypes.DATE,
      true,
      null,
      event.startDate,
    ),
    new Input(
      "Event end date",
      "endDate",
      InputTypes.DATE,
      true,
      null,
      event.endDate,
    ),
    new Input(
      "Event location",
      "location",
      InputTypes.TEXT,
      true,
      "Location",
      event.location,
      50,
    ),
    new Input(
      "Event website",
      "website",
      InputTypes.TEXT,
      false,
      "Website link",
      event.website,
      50,
    ),
  ];

  return (
    <>
      <InputFormModal
        modalIsOpen={modalsIsOpen[MODALS.edit]}
        closeModal={closeModal(MODALS.edit)}
        inputs={editInputs}
        submitHandler={onSubmitHandler}
        submitButtonText="Edit"
      />

      <div className={classes["event-card"]}>
        {!event.published ? (
          <div className={classes["edit-button"]}>
            <EditIcon onClick={openModal(MODALS.edit)} />
          </div>
        ) : null}

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
