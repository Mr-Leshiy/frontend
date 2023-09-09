import React, { useState } from "react";

import classes from "./EventCard.module.css";

import { useEventsContext } from "../../../hooks/EventsContext";
import { formatDate, formatTime } from "../../../lib/Utils";

import ClockLogo from "../../../assets/svg/clock.svg";
import CalendarLogo from "../../../assets/svg/calendar.svg";
import LocationPinLogo from "../../../assets/svg/location-pin.svg";
import UrlLogo from "../../../assets/svg/url.svg";
import EditLogo from "../../../assets/svg/edit.svg";

import InputFormModal, {
  InputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const EventCard = ({ eventIndex }) => {
  const { events, setEvents } = useEventsContext();
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const event = events[eventIndex];

  const openEditModal = () => setEditModalIsOpen(true);
  const closeEditModal = () => setEditModalIsOpen(false);

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
      "",
      "",
      true,
      event.startDate,
    ),
    new Input(
      "Event end date",
      "endDate",
      InputTypes.DATE,
      "",
      "",
      true,
      event.endDate,
    ),
    new Input(
      "Event location",
      "location",
      InputTypes.TEXT,
      "Location",
      50,
      true,
      event.location,
    ),
    new Input(
      "Event website",
      "website",
      InputTypes.TEXT,
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
        submitHandler={onSubmitHandler}
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
