import React, { useState } from "react";

import classes from "./EventCard.module.css";

import { useEventsContext, Event } from "../../../hooks/EventsContext";
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

const EventCard = ({ event, index }) => {
  const { setEvents } = useEventsContext();
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const openEditModal = () => setEditModalIsOpen(true);
  const closeEditModal = () => setEditModalIsOpen(false);

  const onSubmitHandler = (eventValue) => {
    setEvents((events) => {
      const startDate = new Date(
        `${eventValue.startDate}T${eventValue.startTime}`,
      );
      const endDate = new Date(`${eventValue.endDate}T${eventValue.endTime}`);
      const newEvent = new Event(
        eventValue.title,
        startDate,
        endDate,
        eventValue.location,
        eventValue.website,
      );
      events[index] = newEvent;
      return events;
    });
  };

  const editInputs = [
    new Input(
      "Event start",
      "start",
      InpputTypes.DATE,
      "",
      "",
      true,
      event.startDate,
    ),
    new Input(
      "Event end",
      "end",
      InpputTypes.DATE,
      "",
      "",
      true,
      event.endDate,
    ),
    new Input(
      "Event location",
      "location",
      InpputTypes.TEXT,
      "Location",
      50,
      true,
      event.location,
    ),
    new Input(
      "Event website",
      "website",
      InpputTypes.TEXT,
      "Website link",
      50,
      false,
      event.website,
    ),
  ];

  return (
    <>
      <InputFormModal
        modalIsOpen={editModalIsOpen}
        closeModal={closeEditModal}
        inputs={editInputs}
        // submitHandler={onSubmitHandler}
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
