import React from "react";

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

  const onSubmitHandler = ([startDate, endDate, location, website]) => {
    setEvents((events) => {
      events[eventIndex].startDate = startDate;
      events[eventIndex].endDate = endDate;
      events[eventIndex].location = location;
      events[eventIndex].website = website;
      return events;
    });
  };

  const editInputs = [
    new Input(InputTypes.DATE, {
      description: "Event start date",
      name: "startDate",
      required: true,
      defaultValue: event.startDate,
    }),
    new Input(InputTypes.DATE, {
      description: "Event end date",
      name: "endDate",
      required: true,
      defaultValue: event.endDate,
    }),
    new Input(InputTypes.TEXT, {
      description: "Event location",
      name: "location",
      required: true,
      placeholder: "Location",
      defaultValue: event.location,
      maxLength: 50,
    }),
    new Input(InputTypes.TEXT, {
      description: "Event website",
      name: "website",
      required: false,
      placeholder: "Website link",
      defaultValue: event.website,
      maxLength: 50,
    }),
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
